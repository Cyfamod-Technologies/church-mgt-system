(function (window) {
    const config = window.LFC_APP_CONFIG;
    const sessionKey = 'lfc_session';

    async function request(path, options) {
        const response = await fetch(config.buildApiUrl(path), {
            method: options && options.method ? options.method : 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(options && options.headers ? options.headers : {})
            },
            body: options && options.body ? JSON.stringify(options.body) : undefined
        });

        const payload = await response.json().catch(function () {
            return null;
        });

        if (!response.ok) {
            const fallbackMessage = 'Request failed. Please try again.';
            const validationErrors = payload && payload.errors
                ? Object.values(payload.errors).flat().join(' ')
                : '';
            const message = validationErrors || (payload && payload.message) || fallbackMessage;
            const error = new Error(message);
            error.payload = payload;
            error.status = response.status;
            throw error;
        }

        return payload;
    }

    function getSession() {
        const raw = window.localStorage.getItem(sessionKey);

        if (!raw) {
            return null;
        }

        try {
            return JSON.parse(raw);
        } catch (error) {
            window.localStorage.removeItem(sessionKey);
            return null;
        }
    }

    function saveSession(data) {
        const existing = getSession() || {};
        const nextSession = {
            ...existing,
            ...data,
            user: data && Object.prototype.hasOwnProperty.call(data, 'user') ? data.user : existing.user,
            church: data && Object.prototype.hasOwnProperty.call(data, 'church') ? data.church : existing.church,
            branch: data && Object.prototype.hasOwnProperty.call(data, 'branch') ? data.branch : existing.branch,
        };

        window.localStorage.setItem(sessionKey, JSON.stringify(nextSession));
    }

    function clearSession() {
        window.localStorage.removeItem(sessionKey);
    }

    window.LFC_API = Object.freeze({
        request: request,
        saveSession: saveSession,
        getSession: getSession,
        clearSession: clearSession
    });
})(window);
