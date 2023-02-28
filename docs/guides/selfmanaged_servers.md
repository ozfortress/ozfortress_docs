## Self-Hosted Servers
###### Guide Difficulty: Intermediate / Some technical knowledge required.
It is important to preface this documentation with the following note. **You MUST seek league administrator approval for usage of a self-hosted server for official matches. Failure to do so will result in a penalty.**

We have received a plethora of questions over the past few years regarding how to set up a game server, what the requirements are and if you can "self-host" your own server. Below are some basic guidelines on server requirements when not using a bookable game server from an existing bookable provider (**au.serveme.tf**, **Rhizome** or **Qixalite**):

* Servers should not be hosted on a residential connection, no matter how good. The issue isn't always the available bandwidth or network speed, but the fact that residential connections typically aren't protected from DOS attacks or other forms of malicious activity.
* The server should be hosted within the region you play in.
* You can either rent a server off of a game server provider (Streamline Servers, Wombat Servers, etc.) or set up your own on a high-performance VPS or Dedicated Server.
* If you intend on using your own self-hosted server for official matches, your server and league configs should meet the same standards as our own configs, found in our GitHub repository.
* Plugins outside of the logs.tf uploader, TF2 Competitive Fixes, STeph's AntiCheat/StAC, STV Demo Record, RestoreScore and the Uber Pause fix that modify gameplay are prohibited.

If you are unsure where your hosted server falls, feel free to contact an admin.

**Please note: We will not however offer support or resolve technical server issues for you. You are on your own with server setup, maintenance and administration.**

## Basic Self-Hosted Server Setup
You can rent a server from a game server provider or "game server hosting" provider. This route is usually the easiest and has all of the basic features you would need, including a control panel of some sort, many preconfigured configs, plugins and maps. However, if you are feeling dangerous, you can set up your own on dedicated hardware or a VPS. If you are looking to setup your own server from scratch on a VPS or cloud instance, be sure that you are not sharing resources with other users, as this typically degrades game server performance. Below are a few guides and references on how to set up a server with everything you need for it to be a league complaint.

##### Essential:

* [Valve guide: Windows server setup](https://wiki.teamfortress.com/wiki/Windows_dedicated_server)
* [Valve guide: Linux server setup](https://wiki.teamfortress.com/wiki/Linux_dedicated_server) (Most solutions will be running some form of Linux)

##### Recommended:

* spiretf Docker image: Competitive Server (contains logs.tf, demos.tf, twiikuu's comp-fixes and every other essential plugin)

### Required Server Plugins
The plugins listed below are required for league play compliance, regardless of whatever hosting option you choose. 

* SourceMod
* MetaMod
* logs.tf and its dependencies
* STV Record (can be found on the logs.tf page)
* All of F2's plugins, [found here](https://github.com/F2/F2s-sourcemod-plugins).
* [StAC/STeph's AntiCheat](https://github.com/sapphonie/StAC-tf2), needed for its interp fix. If you wish to setup monitoring to your own discord server, please feel free - however we will not accept these as an Anti-Cheat report. StAC should be configured so it **will not kick/ban/notify players, with the exception of the interp settings which should kick the user from the server**.

### Non-Plugin Requirements
In addition to server plugins, there are other specific requirements.

* [Latest ozfortress configs](https://github.com/ozfortress/server-configs), which are updated regularly.
* Adequate autoexec/server configs for play.
  * Ensure `mp_idlemaxtime` is set either to `0` or above `30`.
  * Following TV commands set as such (prevents weird camera control behaviour in SourceTV):
    * `tv_allow_camera_man 1`
    * `tv_allow_static_shots 1`
    * `tv_transmitall 1`
  * Server logging enabled with `log on` present in `server.cfg`.
* STV Demo Recording and Upload (via demos.tf, personal upload, or automated in some other form).
* Public or Password locked SourceTV for use in match casts.

This page, as stated above, is only a small list of resources you can use to set up your own server. We don't offer support for issues not associated with our configs or whitelists, however, a quick Google would allow you to resolve most, if not all the issues you could run into during this guide.
