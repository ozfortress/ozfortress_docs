# ozfortress Server Configuration
This page houses much of the required server resources for competitive integrity. For a full list and guide, please see our [Self-Managed Servers guide](/guides/selfmanaged_servers/) .

## Required Plugins
### TF2 Competitive Fixes
ozfortress now uses the "TF2 Comp Fixes" plugin by *twiikuu* to implement various fixes onto official match servers. [You can download the plugin here](https://github.com/ldesgoui/tf2-comp-fixes).

The above link also includes an explanation of what each command variable does, below you will find which fixes we use and consider staples. We may additionally make use of other fixes, which will have their use denoted on that competition page.

```
sm_deterministic_fall_damage 0 // Deprecated by Valve's own fix - "tf_fall_damage_disablespread 1"
sm_empty_active_ubercharges_when_dropped 1 // Empties dropped medi-gun's. Gameplay change, on since Season 34.
sm_fix_ghost_crossbow_bolts 1 // Self explanatory.
sm_fix_post_pause_state 0 // Keep off, conflicts with pause plugins.
sm_fix_slope_bug 1 // Ramp-slide fix.
sm_fix_sticky_delay 1 // Fixes issues with sticky delay.
sm_inhibit_extendfreeze 1 // Fixes users being able to `extendfreeze` in console to abuse killcam.
sm_override_pipe_size 0 // Sets the Iron Bomber projectile size to the same as the default launcher (4). Off in favour of Valve fix.
sm_projectiles_ignore_teammates 1 // Gameplay change, on since Season 34.
sm_remove_halloween_souls 1 // NICE.
sm_remove_medic_attach_speed 0 // Gameplay change, off.
sm_remove_pipe_spin 0 // Gameplay change, off.
sm_rest_in_peace_rick_may 255 // Transparency of Rick May statues.
sm_winger_jump_bonus_when_fully_deployed 0 // Gameplay change, off.
sm_fix_reflect_self_damage 1 // Gameplay change, off.
sm_projectiles_collide_with_cylinders 0 // Gameplay change, off.
sm_grounded_rj_resistance 0 // Gameplay change, off.
sm_prevent_respawning 0 // Gameplay change, off.
sm_solid_buildings 0 // Gameplay change, off.
tf_fall_damage_disablespread 1
sm_gunboats_always_apply 1 // Gameplay change, on since Season 35.
```

### STeph's AntiCheat (StAC)
ozfortress has recently employed the use of StAC to enforce specific interp settings, restricting clients from using abusable interpolation settings. This plugin also fixes some abusable commands. [You can see the what the commands do here](https://github.com/sapphonie/StAC-tf2/blob/master/cvars.md), and [download the plugin here](https://github.com/sapphonie/StAC-tf2). Our required commands are below:

```
stac_enabled "1"
stac_verbose_info "0"
stac_ban_duration "1"
stac_max_allowed_turn_secs "0"
stac_ban_for_misccheats "0"
stac_optimize_cvars "1"
stac_max_aimsnap_detections "0"
stac_max_psilent_detections "0"
stac_max_bhop_detections "0"
stac_max_fakeang_detections "0"
stac_max_cmdnum_detections "0"
stac_max_tbot_detections "0"
stac_min_interp_ms "-1"
stac_max_interp_ms "101"
stac_min_randomcheck_secs "60"
stac_max_randomcheck_secs "300"
stac_include_demoname_in_banreason "0"
stac_log_to_file "1"
stac_fixpingmasking_enabled "1"
stac_max_userinfo_spam_detections "0"
stac_kick_unauthed_clients "0"
stac_silent "2"
stac_max_connections_from_ip "0"
stac_work_with_sv_cheats "0"
```

!!! Note "Please Note"
    The only commands that should kick a player are the interp enforcement commands, the rest should only log/be switched off.

### ozfortress Demo Checker Plugin
ozfortress now operates [this plugin](https://github.com/ozfortress/demo_check_plugin) on all of its servers, and requires all server operators to run this plugin as well. This plugin will check if a user's in-game POV demo recording settings match the league requirements:
```
ds_enable 2/3
ds_autodelete 0
```

You can find more information on what these commands and values do [here](/guides/pov_demo_recording/). For now, ozfortress has this plugin set to only warn the user (and notify all users in server) on join if that player's settings are inadequate. We also log these notifications to both a file and an internal Discord channel. We ask that when you set up this plugin on your server and reach out to get approval for your server to be used for officials, that you use the Discord Webhook we provide, so we can log demo setting notifications from your server to our internal Discord. This will prevent us from ever needing to reach out to you for the log files. We require the following settings to be on for all servers:
```
sm_democheck_enabled 1
sm_democheck_warn 1
sm_democheck_announce 1
sm_democheck_announce_textfile 1
```

The following settings can be set as you see fit:
```
sm_democheck_onreadyup <0/1> // Requires SOAPDM to function, hence why it is optional.
sm_democheck_announce_discord 1 // Technically optional, but setting it up means we never need to bug you for your log files!
```

In addition, our league configs make use of the following setting to check every player in server when the `ozfortress.cfg` base config is executed (which happens every time a format/gamemode config file is executed).

### ozfortress Ban Enforcement Plugin
If you wish to use your server for official ozfortress matches, you will need [this plugin](https://github.com/ozfortress/ozf-bans-enforcement). The following commands are already set in our league configs.
```
ozf_bans_warn 1
ozf_bans_enforce 1
```

If you wish to turn off this plugin after a match, please feel free to, whilst we don't provide it in our configs by default, you can set put this alias command in your server.cfg, that way you can invoke it whenever you wish to turn bans off.
```
alias bans-off "ozf_bans_enforce 0"
```

### Enhanced Match Timer plugin
This plugin is used exclusively for Control Point maps (5CP maps in particular), and an older version is also used in [North America](https://github.com/b4nnyBot/Progressive-Ruleset-Timer-Plugins). You can download the version of the [plugin we use here](https://github.com/ozfortress/Enhanced-Match-Timer).

You can find information, convars and the round timer value in the 5 Control Points sections below.

---

## Required Server Configs
### ozfortress Sixes (6v6) Seasonal League
The following formats are used in the ozfortress Sixes Seasonal League and have an associated configuration file in the ozfortress configs.

#### 5 Control Points
Standard 5 Control Points (5CP) maps are played to 25 minutes with a 5 round win limit rule. The Round Timer variable is set to 4 minutes using the Progressive Ruleset Timer plugin. The following configuration represents this format:
```
mp_windifference 5
mp_timelimit 25
mp_winlimit 0
round_time_override 240
```
Load this configuration using `rcon exec ozfortress_6v6_5cp` or simply `rcon ozf-6s-5cp` on au.serveme.tf servers.

#### King of the Hill
King of the Hill (KOTH) maps are played first to 3 with no time limit. The following configuration represents this format:
```
mp_windifference 0
mp_timelimit 0
mp_winlimit 3
```
Load this configuration using `rcon exec ozfortress_6v6_koth` or simply `rcon ozf-6s-koth` on au.serveme.tf servers.

#### Golden Cap
In formats where ties are not allowed, a golden cap may be used to determine the winner of a 5CP match tied at 30 minutes. Golden Cap rounds are played till the first capture of the last point with no time limit. The following configuration represents this format:

```
mp_windifference 0
mp_timelimit 0
mp_winlimit 1
round_time_override 240
```
Load this configuration using `rcon exec ozfortress_6v6_golden_cap` or simply `rcon ozf-6s-golden` on au.serveme.tf servers.

!!!note "Please note"
    Golden Caps are no longer used when the Progressive Ruleset Timer plugin is being run.

---

### ozfortress Highlander (9v9/HL) Seasonal League
The following formats are used in the ozfortress Highlander Seasonal League and have an associated configuration file in the ozfortress configs.

#### 5 Control Points
Standard 5 Control Points (5CP) maps are played to 30 minutes with a 5 round win-limit. The Round Timer variable is set to 5 minutes using the Improved Round Timer plugin. The following configuration represents this format:
```
mp_windifference 0
mp_timelimit 30
mp_winlimit 5
round_time_override 240
```
Load this configuration using `rcon exec ozfortress_hl_5cp` or simply `rcon ozf-hl-5cp` on au.serveme.tf servers.

#### King of the Hill
King of the Hill (KOTH) maps are played first to 3 with no time limit. The following configuration represents this format:
```
mp_windifference 0
mp_timelimit 0
mp_winlimit 3
```
Load this configuration using `rcon exec ozfortress_hl_koth` or simply `rcon ozf-hl-koth` on au.serveme.tf servers.

#### Stopwatch
Stopwatch maps are played to a max of 2 rounds with no time limit. The following configuration represents this format:
```
mp_maxrounds 2
mp_timelimit 0
mp_tournament_stopwatch 1
```
Load this configuration using `rcon exec ozfortress_hl_stopwatch` or simply `rcon ozf-hl-stopwatch` on au.serveme.tf servers.

#### Golden Cap
In formats where ties are not allowed, a golden cap may be used to determine the winner of a 5CP match tied at 30 minutes. Golden Cap rounds are played till the first capture of the last point with no time limit. The following configuration represents this format:

```
mp_windifference 0
mp_timelimit 0
mp_winlimit 1
round_time_override 240
```
Load this configuration using `rcon exec ozfortress_hl_golden_cap` or simply `rcon ozf-hl-golden` on au.serveme.tf servers.

---

### Other Configs

The following formats are also included in the ozfortress server configurations but do not have a respective active competition.

#### Ultiduo
Ultiduo maps are played with a Soldier and Medic pair on each team. There is a winlimit of 1 round.

```
mp_timelimit 0
mp_winlimit 1
```
Load this configuration using `rcon exec ozfortress_ultiduo` or simply `rcon ultiduo` on au.serveme.tf servers.

#### BBall
BBall maps are played with two Soldiers on each team. There is a winlimit of 20 captures.

```
mp_maxrounds 0
mp_windifference 0
mp_timelimit 10
mp_winlimit 20
```
Load this configuration using `rcon exec ozfortress_bball` or simply `rcon bball` on au.serveme.tf servers.

---

## Download Configs / Server Configs Repository
You can download the ozfortress server configuration files [here](https://github.com/ozfortress/server-configs).

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)

This work by [ozfortress](http://ozfortress.com) is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
