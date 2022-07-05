---
home: false
title: Self-managed Servers
lastUpdated: true
---

## Self-Hosted Servers
It is important to preface this documentation with the following note. **You MUST seek league administrator approval for usage of a self-hosted server for official matches. Failure to do so will result in a penalty.**

We have received a plethora of questions over the past few years regarding how to set up a game server, what the requirements are and if you can "self-host" your own server. Below are some basic guidelines on server requirements when not using a bookable server from an existing bookable provider (**Qixalite** or **ozfortress**):
+ Servers should not be hosted on a residential connection, no matter how good. The issue isn't always the available bandwidth or network speed, but the fact that residential connections typically aren't protected from DOS attacks or other forms of malicious activity.
+ The server should be hosted within the region you play in.
+ You can either rent a server off of a game server provider (Streamline Servers, Wombat Servers, etc.) or set up your own on a high-performance VPS or Dedicated Server.
+ If you intend on using your own self-hosted server for official matches, your server and league configs should meet the same standards as our own configs, found in our GitHub repository.
+ Plugins outside of logs.tf, TF2 Competitive Fixes, STV Demo Record, RestoreScore and the Uber Pause fix aren't permitted under any circumstance. This is including but is not limited to plugins that; modify gameplay, server to client interaction, server-based Anti-Cheat plugins, or plugins that violate CVARs set by our league configs (forced third-person killcams for example).

If you are unsure where your hosted server falls, feel free to contact a League Administrator.
**Staff will not however offer support or resolve technical server issues for you. You are on your own with server setup, maintenance and administration.**

## Basic Self-Hosted Server Setup
As stated on our Hub page, you can rent a server from a game server provider or "reseller". This route is usually the easiest and has all of the basic features you would need. However, if you are feeling dangerous, you can set up your own on dedicated hardware or a VPS. Below are a few guides and references on how to set up a server with everything you need for it to be a league complaint.

Essential:
+ Valve guide: Windows server setup
+ Valve guide: Linux server setup

Recommended:
+ spiretf Docker image: Competitive Server (contains logs.tf, demos.tf, twiikuu's comp-fixes and every other essential plugin)

Required server plugin (if you are manually installing them):
+ SourceMod
+ MetaMod
+ logs.tf and its dependencies
+ STV Record (can be found on the logs.tf page)

This page, as stated above, is only a small list of resources you can use to set up your own server. We don't offer support for issues with our configs or whitelists, however, a quick Google would allow you to resolve most, if not all the issues you could run into during this process.
