---
slug: ops-ai-systems
name: Ops & AI Systems
from: 500
timeline: 1 to 3 weeks
template: OpsServicePage   # long page, breaks the standard template on purpose
# Rendered fields. Diana: the Figma frame (22:1528) holds the final content for this page,
# so wording AND order follow Figma. FAQ answers come from the notes below (Figma has only the questions).
title: "Operations & AI Systems"
pain: "Your team is busy all day and the store still runs on one person's memory."
familiar:
  - "The same questions and tasks eat hours every week."
  - "Only one person knows how things are done."
  - "Customer support, reporting and content are manual."
  - "You tried AI tools, but nothing connects into a working system."
get:
  - "A map of your recurring work and where AI can safely help."
  - "SOPs for your key processes, written so a new person can follow them."
  - "A knowledge base (Notion) your team and agents can both use."
  - "One or more AI agents set up for repetitive jobs (for example support drafting, reporting, content), with clear rules and a place for a human to check."
  - "A guide on how to monitor and adjust the agents."
  - "Error alerts and a fallback to a person on every automation, so failures don't pass unnoticed."
  - "A written estimate of the monthly running costs (AI plan, automation tool, tokens) before you pay."
  - "A care window after handoff: 30 days of free fixes for anything I built that stops working."
ops:
  match:
    eyebrow: "NOT SURE WHERE TO START?"
    heading: "Match your situation"
    # Each row: text, then the part in bold, then optional text after it.
    rows:
      - text: "Your tools don't talk to each other and people copy data by hand: start with a"
        strong: "workflow automation."
      - text: "You do high-volume work that needs judgment (support replies, product content, research): start with a"
        strong: "custom AI agent."
      - text: "Nobody has written down how things are done: start with the"
        strong: "business core and SOPs"
        after: ", then automate."
      - text: "Not sure:"
        strong: "book a call."
        after: " I'll look at your week and tell you honestly where to begin, including 'don't automate this yet'."
  system:
    heading: "What an AI system is, in plain words"
    text: "A few small helpers that each do one repetitive job, connected to your tools and guided by one shared set of rules about your business. People stay in charge: the helpers prepare, draft and move information, and a person checks what matters. Agents can be big or small. What I build depends on your business."
  keyMessage: "Automation is not a one-time install that stays perfect forever. It is a small system that needs a few checks. That is why monitoring and a care option are part of the offer."
  examples:
    heading: "Example automations"
    items:
      - "A customer question arrives, an agent drafts a reply from your policies, you approve it, and it is sent from your helpdesk."
      - "A weekly report: store and analytics data pulled together, summarized and posted to Slack or email."
      - "Product content: product data in, descriptions and SEO fields drafted, human review, published to Shopify."
      - "An inquiry arrives through a form, details are saved in a sheet or CRM, the team is notified and a calendar link is sent."
      - "A new client or team member joins: onboarding checklist, files and access are prepared automatically."
      - "A low-stock or failed-order alert goes to the right person with the next step written out."
  agents:
    heading: "Agents I have built"
    items:
      - name: "Architect agent:"
        text: "watches the other agents and keeps the SOPs and the business core in Notion up to date."
      - name: "SEO agent:"
        text: "writes SEO blog posts, publishes them to the Shopify blog and adds SEO fields to images and other content."
      - name: "Content agent:"
        text: "content automation for planning and publishing, including Pinterest and social."
      - name: "Analytics agent:"
        text: "collects data from your channels and proposes hypotheses."
      - name: "Support agent:"
        text: "that resolves tickets by email, chat or Slack."
      - name: "Research agent:"
        text: "briefs, summaries and competitor analysis."
      - name: "Creative agent:"
        text: "that works in Figma and creates creatives and design."
      - name: "Onboarding agent:"
        text: "for new clients or new employees."
      - name: "Internal knowledge:"
        text: "agent trained on your business that answers team questions."
  cost:
    heading: "What it costs to run"
    intro: "My fee is one-time. A running system also has monthly costs on your side"
    cards:
      - title: "Tool subscriptions"
        text: "an AI plan (for example Claude or ChatGPT), an automation tool (Zapier, Make or n8n), a helpdesk if used, a Notion plan if needed. Some automations need nothing extra beyond an AI subscription you may already have. Others need an automation platform plan."
      - title: "Usage"
        text: "when agents run through an API, you pay for tokens, and the amount depends on how many tasks run per day."
    footnote: "The agents are built on your accounts and use your tokens, because they live inside your systems. I put the expected monthly running cost into the written scope before you pay."
  breaks:
    heading: "What happens when it breaks ?"
    cards:
      - title: "Care window"
        tag: "[ included ]"
        text: "30 days after handoff, anything I built that stops working is fixed free. New features and changes caused by your tools or business changing are not included."
      - title: "Agent Care"
        tag: "[ monthly, optional ]"
        text: "monitoring, error alerts, a monthly check and a set number of fix hours. $150 to $300 per month for one agent, $300 to $1,000 per month for 2 to 5 automations or agents, larger systems quoted individually. The price depends on the number of agents and how complex they are. I reply within 2 working days."
      - title: "Fix ticket"
        tag: "[ no subscription ]"
        text: "from $50 to $300 per issue, depending on the breakage. A quick reconnect costs little, a bigger repair costs more. I quote the price before I start."
      - title: "Returning clients"
        text: "15% off any new project, fix or change within 12 months of your last project. Agent Care is not discounted, and the discount does not combine with the teardown credit."
steps:
  - title: "Business core"
    label: "week 1"
    text: "I write down what your agents need to know: what you sell, your tone, your rules, your strategy and the common cases. This is the shared 'brain' every agent reads."
  - title: "Audit"
    label: "week 1"
    text: "We list your recurring tasks and decide which can be automated, which AI should only assist with a human check, and which stay manual."
  - title: "Accounts and access"
    label: "weeks 1 to 2"
    # Figma repeats the Business core text here; the notes below have the text for this step.
    text: "We create or connect the accounts the system runs on (AI platform, automation tool, helpdesk, store). They are in your name."
  - title: "Build"
    label: "week 2"
    text: "I build the first workflow or agent on one real task."
  - title: "Test and tune"
    label: "weeks 2 to 3"
    text: "We run it on real examples, fix mistakes and set the human checkpoints."
  - title: "Handoff and monitoring"
    # Figma says "weeks 3"; the notes say "week 3".
    label: "week 3"
    text: "You get a guide and a training call. Error alerts and a fallback to a person are switched on, and I check in a week later."
need:
  - "2 to 3 hours of your time for the interview and review."
  - "Access to the tools involved (store, helpdesk, spreadsheets, email)."
  - "Examples of real tasks and what 'good' looks like."
  - "AI accounts and tokens on your side. I build the agents on your accounts, and once they run inside your systems they use your tokens. The token cost is paid by you, and I give you a rough monthly estimate before we start."
tools:
  - "Notion"
  - "Claude, ChatGPT, Gemini,"
  - "Google Workspace and Sheets,"
  - "Airtable, Slack, Trello or Jira for task boards,"
  - "Shopify Flow, and automation tools such as Zapier, n8n or Make.com."
  - "For support agents: Gorgias or Zendesk."
packages:
  - price: "$500"
    name: "SOP pack"
    items:
      - "Process map and SOPs for 3 key processes in Notion."
  - price: "$1,200"
    name: "SOPs + 1 agent"
    popular: true
    items:
      - "Process map and SOPs for 3 key processes in Notion."
      - "Working AI agent (for example support drafting or weekly reporting)."
  - price: "$2,500"
    name: "System"
    items:
      - "Up to 3 or 4 agents with a coordinating agent,"
      - "A knowledge base and training. (Based on how I built the system for ModaBlvck and ORA.)"
goesUpWith: "Number of tools to connect, how messy the current processes are, how much human review is needed."
priceNote:
  text: "Running costs (AI plan, automation tool, tokens) are paid by you and are not included in these prices."
rushName: "project"
faq:
  - q: "Will AI replace my team?"
    a: "The goal is to take repetitive work off people, not to remove them. Every agent has a human review point."
  - q: "Is this complicated? Will it break my business?"
    a: "No. I start with one small, low-risk task, test it on real examples, and only then add more. Your existing tools and processes keep running while we build."
  - q: "What is an AI agent, in plain words?"
    a: "A helper that does one repetitive job for you, such as drafting support replies, preparing a weekly report or sorting orders, following written rules. It does not decide things on its own that you haven't approved."
  - q: "Who pays for the AI?"
    a: "You do, through your own accounts. The agents run on your tokens, and I give you a rough monthly estimate before we start."
  - q: "What if the agent makes a mistake?"
    a: "Every agent has a human check at the points that matter (for example, a reply is drafted and you approve it before it is sent). We tune the rules on real cases until the mistakes are rare, and you can switch an agent off at any time."
  - q: "What data do the agents see?"
    a: "Only the tools and information we connect for the task. We agree on that list at the start. Customer data is not shared with anything we have not agreed on."
  - q: "Can you write code?"
    a: "It depends on the situation and the complexity of the task. Most of this work doesn't need code, and I build it with no-code tools and connectors. If your task needs code, I write it."
  - q: "How fast will I see a result?"
    a: "Usually the first working agent is running within 2 weeks of the start."
  - q: "Do I need a technical person on my team?"
    a: "No. I leave you a short guide and a training call. Someone on your team just needs to own the process after handoff."
  - q: "What happens after the project?"
    a: "You can run the system yourself with the guide, use the 30-day care window for anything I built that breaks, and after that choose Agent Care (monthly) or a fix ticket (one-off)."
  - q: "What does it cost to run, besides your fee?"
    a: "The AI plan, the automation tool and the tokens used when agents run. Some automations need only an AI subscription you may already have. I put the expected monthly cost in the written scope before you pay."
  - q: "Who owns the accounts?"
    a: "You do. Everything is created in your name, so you can keep it running without me."
  - shared: finish
  - shared: deliver
  - shared: faster
  - shared: credit
---

# Original copy notes (not rendered)

Page order: 1 Top · 2 Sounds familiar · 3 Start here · 4 What an AI system is · 5 What you get · 6 How it is built (6 steps) · 7 Example automations · 8 Agents I have built / can build · 9 What I need from you · 10 Tools · 11 What it costs to run · 12 Packages and price · 13 What happens when it breaks · 14 Proof · 15 FAQ · 16 Guarantee strip + final button.
(Check the Figma Ops & AI frame for the real order and follow it.)

## Top
**Pain line:** Your team is busy all day and the store still runs on one person's memory.
**After:** Written processes and AI agents that take over repetitive work, with error alerts and a fallback to a person so nothing fails silently.
**From $500 · 1 to 3 weeks**
**Under the price:** Delivery Guarantee (full refund if I don't deliver the agreed scope on time). Running costs of AI tools are paid by you and are explained below.

## Sounds familiar?
- The same questions and tasks eat hours every week.
- Only one person knows how things are done.
- Customer support, reporting and content are manual.
- You tried AI tools, but nothing connects into a working system.

## Start here: match your situation
- Your tools don't talk to each other and people copy data by hand: start with a **workflow automation**.
- You do high-volume work that needs judgment (support replies, product content, research): start with a **custom AI agent**.
- Nobody has written down how things are done: start with the **business core and SOPs**, then automate.
- Not sure: book a call. I'll look at your week and tell you honestly where to begin, including 'don't automate this yet'.
(Mapping to packages: SOP pack, SOPs + 1 agent, System.)

## What an AI system is, in plain words
A few small helpers that each do one repetitive job, connected to your tools and guided by one shared set of rules about your business. People stay in charge: the helpers prepare, draft and move information, and a person checks what matters. Agents can be big or small. What I build depends on your business.

## What you get
- A map of your recurring work and where AI can safely help.
- SOPs for your key processes, written so a new person can follow them.
- A knowledge base (Notion) your team and agents can both use.
- One or more AI agents set up for repetitive jobs (for example support drafting, reporting, content), with clear rules and a place for a human to check.
- A guide on how to monitor and adjust the agents.
- Error alerts and a fallback to a person on every automation, so failures don't pass unnoticed.
- A written estimate of the monthly running costs (AI plan, automation tool, tokens) before you pay.
- A care window after handoff: 30 days of free fixes for anything I built that stops working.

## How it is built
1. **Business core (week 1).** I write down what your agents need to know: what you sell, your tone, your rules, your strategy and the common cases. This is the shared 'brain' every agent reads.
2. **Audit (week 1).** We list your recurring tasks and decide which can be automated, which AI should only assist with a human check, and which stay manual.
3. **Accounts and access (weeks 1 to 2).** We create or connect the accounts the system runs on (AI platform, automation tool, helpdesk, store). They are in your name.
4. **Build (week 2).** I build the first workflow or agent on one real task.
5. **Test and tune (weeks 2 to 3).** We run it on real examples, fix mistakes and set the human checkpoints.
6. **Handoff and monitoring (week 3).** You get a guide and a training call. Error alerts and a fallback to a person are switched on, and I check in a week later.
Key message: Automation is not a one-time install that stays perfect forever. It is a small system that needs a few checks. That is why monitoring and a care option are part of the offer.

## Example automations
- A customer question arrives, an agent drafts a reply from your policies, you approve it, and it is sent from your helpdesk.
- A weekly report: store and analytics data pulled together, summarized and posted to Slack or email.
- Product content: product data in, descriptions and SEO fields drafted, human review, published to Shopify.
- An inquiry arrives through a form, details are saved in a sheet or CRM, the team is notified and a calendar link is sent.
- A new client or team member joins: onboarding checklist, files and access are prepared automatically.
- A low-stock or failed-order alert goes to the right person with the next step written out.
(CHECK: remove any example Diana cannot show.)

## Agents I have built (CHECK each before publishing)
- SEO agent: writes SEO blog posts, publishes them to the Shopify blog and adds SEO fields to images and other content.
- Architect agent: watches the other agents and keeps the SOPs and the business core in Notion up to date.
- Content automation for planning and publishing, including Pinterest and social.
- Analytics agent: collects data from your channels and proposes hypotheses.
- Finance agent and ad-targeting agent.
- AI-assisted customer support.
(Trust-layer notes also list a Figma creative agent and an internal knowledge agent as built; the services page lists them under "can build". CHECK with Diana.)

## Agents I can build
- Support agent that resolves tickets by email, chat or Slack.
- Research agent: briefs, summaries and competitor analysis.
- Creative agent that works in Figma.
- Onboarding agent for new clients or new employees.
- Internal knowledge agent trained on your business that answers team questions.

## What I need from you
- 2 to 3 hours of your time for the interview and review.
- Access to the tools involved (store, helpdesk, spreadsheets, email).
- Examples of real tasks and what 'good' looks like.
- AI accounts and tokens on your side. I build the agents on your accounts, and once they run inside your systems they use your tokens. The token cost is paid by you, and I give you a rough monthly estimate before we start.

## Tools
Notion, Claude, ChatGPT, Gemini, Google Workspace and Sheets, Airtable, Slack, Trello or Jira for task boards, Shopify Flow, and automation tools such as Zapier, n8n or Make.com. For support agents: Gorgias or Zendesk.

## What it costs to run (not part of my fee)
My fee is one-time. A running system also has monthly costs on your side:
1. **Tool subscriptions:** an AI plan (for example Claude or ChatGPT), an automation tool (Zapier, Make or n8n), a helpdesk if used, a Notion plan if needed. Some automations need nothing extra beyond an AI subscription you may already have. Others need an automation platform plan.
2. **Usage:** when agents run through an API, you pay for tokens, and the amount depends on how many tasks run per day.
The agents are built on your accounts and use your tokens, because they live inside your systems. I put the expected monthly running cost into the written scope before you pay.
CHECK: do NOT show price numbers until verified on each vendor's page.

## Price: $500 to $2,500, depends on the number of processes and agents
- **$500 SOP pack:** process map and SOPs for 3 key processes in Notion.
- **$1,200 SOPs + 1 agent:** the above plus one working AI agent (for example support drafting or weekly reporting).
- **$2,500 System:** up to 3 or 4 agents with a coordinating agent, a knowledge base and training. Based on how I built the system for ModaBlvck and ORA.
- Goes up with: number of tools to connect, how messy the current processes are, how much human review is needed.
- Running costs (AI plan, automation tool, tokens) are paid by you and are not included.

## What happens when it breaks
Every build includes error alerts and a fallback: if an automation fails, you get a notification and the task goes to a person instead of disappearing. After handoff there are three options:
- **Care window (included):** 30 days after handoff, anything I built that stops working is fixed free. New features and changes caused by your tools or business changing are not included.
- **Agent Care (monthly, optional):** monitoring, error alerts, a monthly check and a set number of fix hours. $150 to $300 per month for one agent, $300 to $1,000 per month for 2 to 5 automations or agents, larger systems quoted individually. Depends on the number of agents and how complex they are. I reply within 2 working days.
- **Fix ticket (no subscription):** from $50 to $300 per issue, depending on the breakage. A quick reconnect costs little, a bigger repair costs more. I quote the price before I start.
- **Returning clients:** 15% off any new project, fix or change within 12 months of your last project. Agent Care is not discounted, and the discount does not combine with the teardown credit.

## Proof
Anonymized agent system diagram, a SOP page, a Notion workspace. Related work: ModaBlvck, ORA Studio. (CHECK: screenshots not provided yet)

## Questions
- **Will AI replace my team?** The goal is to take repetitive work off people, not to remove them. Every agent has a human review point.
- **Is this complicated? Will it break my business?** No. I start with one small, low-risk task, test it on real examples, and only then add more. Your existing tools and processes keep running while we build.
- **What is an AI agent, in plain words?** A helper that does one repetitive job for you, such as drafting support replies, preparing a weekly report or sorting orders, following written rules. It does not decide things on its own that you haven't approved.
- **Who pays for the AI?** You do, through your own accounts. The agents run on your tokens, and I give you a rough monthly estimate before we start.
- **What if the agent makes a mistake?** Every agent has a human check at the points that matter (for example, a reply is drafted and you approve it before it is sent). We tune the rules on real cases until the mistakes are rare, and you can switch an agent off at any time.
- **What data do the agents see?** Only the tools and information we connect for the task. We agree on that list at the start. Customer data is not shared with anything we have not agreed on.
- **How fast will I see a result?** Usually the first working agent is running within 2 weeks of the start.
- **Do I need a technical person on my team?** No. I leave you a short guide and a training call. Someone on your team just needs to own the process after handoff.
- **What happens after the project?** You can run the system yourself with the guide, use the 30-day care window for anything I built that breaks, and after that choose Agent Care (monthly) or a fix ticket (one-off).
- **Where is the best place to start?** With the task that eats the most hours and has the clearest rules, often support replies, reporting or product content.
- **What if the automation breaks?** Every build includes error alerts and a fallback to a person, so a failure doesn't pass unnoticed. For 30 days after handoff I fix anything I built that stops working, free. After that you can choose Agent Care or a fix ticket.
- **Will it keep working over time?** Automations depend on tools, rules and a business that change. A tool updates, a key expires, your process changes. That is normal, and it is why I build in alerts and offer a care option. If something changes in your business months later, write to me and you get a fixed price for the fix, not a new project.
- **What does it cost to run, besides your fee?** The AI plan, the automation tool and the tokens used when agents run. Some automations need only an AI subscription you may already have. I put the expected monthly cost in the written scope before you pay.
- **Who owns the accounts?** You do. Everything is created in your name, so you can keep it running without me.
- **Can you write code?** It depends on the situation and the complexity of the task. Most of this work doesn't need code, and I build it with no-code tools and connectors. If your task needs code, I write it.
- Will you finish on time? / What if you don't deliver? / Can you do it faster? / I already bought a teardown. Do I get credit?: see shared.md

## Guarantee strip (above the final button)
You pay for a finished scope, not for promises. If I don't deliver the agreed scope on time, you get a full refund. I guarantee delivery, not business results.
