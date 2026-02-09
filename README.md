# Kagami

**A Self-Discipline Reflection Interface**

> Kagami does not automate discipline, suggest habits, or push motivation. It acts as a mirror, not a coach.

Kagami is a web application designed to help users evaluate their days honestly, observe long-term patterns, and build self-awareness through manual, intentional data entry.

---

## Core Philosophy

Many people already know what a disciplined life looks like for them. The real difficulty is not planning, but evaluating consistency over time. Kagami operates on a strict set of non-negotiable principles:

* **Subjectivity:** Discipline is strictly user-defined.
* **Intentionality:** All data is explicitly entered by the user.
* **Neutrality:** Nothing is auto-tracked. Missed days are treated as data, not failure.
* **Agency:** Kagami never decides what a "good day" means. Only the user does.

### The Kagami Difference

| Standard Productivity Tools | Kagami |
| --- | --- |
| Focus on Tasks & Goals | Focus on Reflection & Awareness |
| Uses Notifications & Nudges | Uses Intentional Daily Check-ins |
| Gamification & Streaks | Long-term Pattern Recognition |
| Auto-tracking | Manual, Conscious Entry |

---

## Target Audience

Kagami is designed for individuals who seek clarity and honesty rather than external pressure.

* Students
* Early-career professionals
* Self-improvers

---

## Functional Overview (v1)

### 1. User-Defined Behaviors

There are no default behaviors. Users define specific metrics that represent discipline in their own lives.

* *Examples:* `Gym`, `Deep Work`, `Meditation`, `Reading`, `Sleep Quality`.

### 2. Optional Templates

To reduce onboarding friction without removing autonomy, Kagami offers optional templates. These pre-fill behaviors but remain fully editable and transfer full ownership to the user upon selection.

### 3. Daily Check-Ins

* **Constraint:** One check-in per user, per day.
* **Method:** Users explicitly evaluate their behaviors.
* **Logic:** No auto-created entries and no assumptions made for missed days.

### 4. Time-Based Insights

The goal is pattern recognition, not perfection.

* Daily summaries
* Weekly consistency views
* Long-term trends (30, 90, 180 days)

### 5. Intentional Exclusions

The following features are **excluded** to preserve the product philosophy:

* No reminders or notifications
* No habit recommendations
* No gamification or streak pressure
* No social features or AI coaching
* No auto-tracking

---

## Technical Architecture

### Stack

| Component | Technology | Hosting/Platform |
| --- | --- | --- |
| **Frontend** | React | Vercel |
| **Backend** | Node.js, Express | Render |
| **Database** | MongoDB Atlas | Cloud |
| **Auth** | JWT-based | - |

### Database Collections

* `Users`
* `Behaviors`
* `Daily Check-Ins`

### CI/CD Pipeline

GitHub acts as the single source of truth with a push-based deployment strategy.

1. **Frontend:** Auto-deploys to Vercel on push.
2. **Backend:** Auto-deploys to Render on push.
3. **Config:** Environment variables managed per environment.

---

## Production Standards

Kagami is defined as **Production-Ready** only when the following criteria are met:

* [ ] One check-in per user per day is strictly enforced.
* [ ] Behaviors are fully user-defined.
* [ ] Date handling is time-zone safe.
* [ ] Aggregations are deterministic and reproducible.
* [ ] No silent assumptions exist in the logic.
* [ ] CI/CD works end-to-end without manual intervention.
* [ ] Data persists across application restarts and redeploys.

---

## Future Scope

*Post-Version 1 Exploration*

The following features may be explored in future updates, provided they do not violate the core philosophy of user autonomy:

* Optional reminders
* Advanced data insights
* Data export functionality
* Assisted reflection tools

---

> **Kagami does not try to improve you.**
> **It simply reflects how you lived, so you can decide what to change.**