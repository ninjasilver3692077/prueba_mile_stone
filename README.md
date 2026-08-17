# PlayReal - Milestone 1

**DSAW · Universidad de La Sabana**

## Problem Statement

University students in small private friend groups often organize daily or weekly challenges through WhatsApp, Instagram, or similar messaging tools. The problem is specific: photo evidence is mixed with regular conversation, group votes are counted manually, and participants cannot easily identify who completed a challenge, who received votes, or how they rank over time.

For example, a group of Universidad de La Sabana students may create a reading or creative challenge. After several days, the chat contains unrelated messages, submissions are difficult to find, reactions are an unreliable vote count, and no one has a clear record of points or participation streaks.

PlayReal is a web application that centralizes the challenge flow: **Group -> Challenge -> Evidence -> Voting -> Score -> Ranking**.

## Target Users

The first users are university students, especially classmates and small private groups of friends, who want a motivating and visual way to complete casual shared challenges. The first version is not designed for public social networks, paid competitions, or large communities.

## Why a Web Application

PlayReal should be a web application instead of a spreadsheet, a WhatsApp group, or an existing social network because:

1. **Structured flow:** each challenge needs an organized place for its goal, deadline, evidence, votes, and results. A chat mixes this information with unrelated messages.
2. **Reliable scoring:** a web application can apply one-vote rules, calculate points, and update rankings consistently. A spreadsheet or chat requires manual counting and can create mistakes.
3. **Evidence history:** submissions can be stored as cards with an author, comment, date, and vote count, so groups can revisit previous challenges without searching through conversations.
4. **Private access:** invitation codes and group-specific rankings support the small, private experience that the project requires.
5. **Accessible delivery:** students can use a computer or phone browser without installing a native app, which is realistic for the first semester prototype.

## Static Prototype

The prototype is published from `index.html` through GitHub Pages. It includes navigable static screens for:

- Home and active challenge
- Private group and members
- Uploading evidence
- Voting feed
- Group ranking
- Team information

After the group repository is created, replace this placeholder with the final Pages URL:

`https://dsaw-2026-2.github.io/<group-repository-name>/`

## Figma Wireframes

The Figma file is linked in [figma-link.txt](figma-link.txt). Before submitting the milestone, the team must confirm that the shared Figma file includes every main screen, maintains a consistent wireframe style, and retains at least one annotated screen. The HW04 states (empty, with data, and error/validation) should remain in the file as supporting evidence.

## Team Roles and Collaboration

- **Juan Esteban Gonzalez Villarreal:** project lead and documentation.
- **Edwin Andres Montano Castaneda:** frontend and UX/UI design.
- **Jorge Daniel Fontalvo Restrepo:** backend, deployment, and database.
- **Daniel Orozco Castano:** feedback and testing.

The milestone repository must show real work from multiple members. Each person should make a meaningful commit from their own GitHub account; do not create empty commits merely to satisfy the history requirement.

Suggested first contributions:

- Juan: problem statement and project README.
- Andres: Figma wireframe update and link verification.
- Jorge: group, voting, and ranking prototype screens.
- Daniel: navigation review, testing, and GitHub Pages verification.

## AI Use

AI was used to help structure the initial problem statement, user stories, Tailwind utility classes, and vanilla JavaScript interactions. The detailed log is in [AI-LOG.md](AI-LOG.md). The team reviewed the suggestions, narrowed the scope to an achievable MVP, and adjusted the content and implementation manually.

## Local Preview

Open `index.html` in a browser, or serve this folder with a local static server. When the group repository is available, publish the root folder with GitHub Pages from the `main` branch.
