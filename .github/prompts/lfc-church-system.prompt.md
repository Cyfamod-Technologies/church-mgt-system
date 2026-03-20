---
description: "Generate features for Living Faith Church Management System - church registration, attendance tracking, member growth stages, WOFBI, homecells, church units, follow-up, and reporting"
agent: "agent"
argument-hint: "Feature to build (e.g., church onboarding, attendance form, homecell assignment, WOFBI tracking)"
---

# Living Faith Church Management System

Build features for the LFC church management system following these domain specifications.

## Church Registration / Onboarding

When building church registration features, include these fields:
- **Church Name** (required)
- **Location** (address, city, state)
- **Pastor Information** (name, phone, email)
- **Service Schedule**:
  - Sunday services (configurable number of services, times)
  - Wednesday service (typically 1 service)
  - Unplanned/Special services (flexible column for ad-hoc events)

### Week of Spiritual Emphasis (WOSE)
- Occurs **first week of every month**
- Services on **Wednesday, Thursday, and Friday**
- System should auto-detect first week and prompt for WOSE attendance

## Dashboard Capabilities

Churches should be able to:
- Create and manage sub-churches/branches
- Create and manage homecells
- View all homecells and their attendance records
- View sub-church basic info and records

## Member Growth Tracking

### Basic Growth Stages (Required Path)
Track members through these stages in order:
1. **First Timer** - Initial church visitor
2. **Believer's Foundation Class** - First discipleship stage
3. **Holy Ghost & Water Baptism** - Can be same day, track completion
4. **Homecell Assignment** - Joined a homecell group
5. **Church Unit Assignment** - Joined a service unit

### Advanced Training (WOFBI)
After completing basic stages, members can enroll in **Word of Faith Bible Institute (WOFBI)**:
- **BCC** - Believers' Certification Course
- **LCC** - Leaders' Certification Course  
- **LDC** - Leadership Development Course

### Other Categories
- **New Converts** - People who gave their life to Christ
- **Rededications** - People who rededicated their life to Christ

## Church Units

Members can join these service units:
- Choir
- Technical
- Transport
- Usher
- CCU (Children's Church Unit)
- Security
- Decoration
- Counseling
- Prayer
- *(More units can be added)*

## Follow-Up Process

Track follow-up activities for:
- First timers (calls, visits)
- New converts
- Foundation class attendees
- Homecell prospects

## Attendance Recording

### Service Attendance
For each service, record:
- **Male** count
- **Female** count  
- **Children** count
- System automatically calculates **Total**
- **First Timers** count (separate entry)
- **New Converts** count (separate entry)

### Homecell Attendance
Same structure: Male, Female, Children → Auto-sum Total

### Reporting Aggregations
Generate summaries showing:
- **Weekly**: Total, Average, and **Highest** (the specific service with peak attendance)
- **Monthly**: Total, Average, and Highest attendance across all services
- Breakdown by service type (Sunday, Wednesday, WOSE, Special)

## UI Flow / Page Structure

Organize pages to match actual church workflow:

### 1. Onboarding & Setup
- Church registration/profile
- Service schedule configuration
- Branches management

### 2. Weekly Operations
- Attendance recording (Sunday → Wednesday → WOSE)
- First timers entry
- New converts entry
- Rededications

### 3. Member Journey
- First timers list → Follow-up → Foundation class → Baptism
- WOFBI enrollment (BCC → LCC → LDC)
- Homecell assignment
- Church unit assignment

### 4. Homecell Management
- Homecells list
- Homecell leaders
- Homecell attendance
- Homecell reports

### 5. Reports & Analytics
- Attendance reports (weekly/monthly with highest service)
- Growth reports
- Retention reports
- Foundation class reports
- Baptism reports

### 6. Administration
- Users & access control
- Finance (optional)

## Finance Tracking (Optional)

When enabled, track:
- Service offerings (per service, optional field)
- Tithe records
- Special offerings/donations

*Finance fields should be optional - churches can choose to enable/disable*

## Code Patterns

When generating code for this system:
1. Use the existing HTML template structure in the workspace
2. Follow Bootstrap/AdminLTE patterns for UI consistency
3. Include form validation for required fields
4. Add placeholder API endpoints (e.g., `/api/churches`, `/api/attendance`)
5. Use cards and tables for data display
6. Include date range filters for reports

## Example Invocations

- "Create the church registration form with service schedule"
- "Build the attendance recording page for Sunday services"
- "Generate the weekly attendance summary report"
- "Add the member growth stage tracker with WOFBI"
- "Create homecell assignment modal"
- "Build the follow-up tracking page"
- "Create church unit enrollment form"
- "Build Week of Spiritual Emphasis (WOSE) attendance page"
- "Restructure sidebar navigation to match workflow"
