## TF2 Competitive Fixes
ozfortress now uses the "TF2 Comp Fixes" plugin by *twiikuu* to implement various fixes onto official match servers. [You can download the plugin here](https://github.com/ldesgoui/tf2-comp-fixes).

The above link also includes an explanation of what each command variable does, below you will find which fixes we use and consider staples. We may additionally make use of other fixes, which will have their use denoted on that competition page.

```
sm_deterministic_fall_damage 1
sm_empty_active_ubercharges_when_dropped 1
sm_fix_ghost_crossbow_bolts 1
sm_fix_post_pause_state 0
sm_fix_slope_bug 1
sm_fix_sticky_delay 1
sm_gunboats_always_apply 0
sm_inhibit_extendfreeze 1
sm_override_pipe_size 4
sm_projectiles_ignore_teammates 0
sm_remove_halloween_souls 1
sm_remove_medic_attach_speed 0
sm_remove_pipe_spin 0
sm_rest_in_peace_rick_may 255
sm_winger_jump_bonus_when_fully_deployed 0
sm_fix_reflect_self_damage 0
sm_projectiles_collide_with_cylinders 0
sm_grounded_rj_resistance 0
sm_prevent_respawning 0
sm_solid_buildings 0
```

## ozfortress Sixes Seasonal League
The following formats are used in the ozfortress seasonal leagues and have an associated configuration file in the ozfortress configs.

### 5 Control Points
Standard 5 Control Points (5CP) maps are played for 30 minutes with a 5 point difference mercy rule. Load this configuration using `rcon exec ozfortress_6v6_5cp` or simply `rcon ozf-6s-5cp` on ozfortress servers. 

!!! abstract "Please Note"
    You can still execute the standard 5CP config file using `rcon ozf`.

### King of the Hill
King of the Hill (KOTH) maps are played first to 3 with no time limit. Load this configuration using `rcon exec ozfortress_6v6_koth` or simply `rcon ozf-6s-koth` on ozfortress servers.

### Golden Cap
In formats where ties are not allowed, a golden cap may be used to determine the winner of a 5CP match tied at 30 minutes. Golden Cap rounds are played till the first capture of the last point with no time limit. Load this configuration using `rcon exec ozfortress_golden_cap` or simply `rcon golden` on ozfortress servers.


## ozfortress Highlander Seasonal League
The following formats are used in the ozfortress seasonal leagues and have an associated configuration file in the ozfortress configs.

### Stopwatch
In the Regular Season, each team will only attack and defend once, thus completing a half. The team who beats the defender's time will take the half. In Playoffs, Stopwatch is played in the "ABBA" format, meaning it is a Best of 3 halves scenario. While the ABBA format is the default in Playoffs, it is optional and teams can agree to not play the format, in favour of the same one-half format from the Regular Season. Load this configuration using `rcon exec ozfortress_hl_stopwatch` or simply `rcon ozf-hl-stopwatch` on ozfortress servers.
There can be no ties on Payload & Attack/Defend maps.

### King of the Hill
King of the Hill (KOTH) maps are played first to 3 with no time limit. Load this configuration using `rcon exec ozfortress_hl_koth` or simply `rcon ozf-hl-koth` on ozfortress servers.

### 5 Control Points
Standard 5 Control Points (5CP) maps are played for 30 minutes with a 5 point win limit. Load this configuration using rcon exec `ozfortress_hl_5cp` or simply `rcon ozf-hl-5cp` on ozfortress servers.

## Other Formats
The following formats are also included in the ozfortress server configurations but does not have a respective active competition or seasonal league.

### Ultiduo
Ultiduo maps are played with a Soldier and Medic pair on each team. There is a winlimit of 1. Load this configuration using `rcon exec ozfortress_ultiduo` or simply `rcon ultiduo` on ozfortress servers.
