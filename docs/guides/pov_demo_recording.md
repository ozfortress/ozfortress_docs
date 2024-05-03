# Recording POVs with the in-game Demo Support system
TF2 has two types of demo files, POV (point of view) demos and STV (SourceTV) demos. SourceTV demos are recorded by the match server, and can show the point of view of any player who participated in the match. POV demos are recorded by your game client using the Demo Support system. This guide will walk you through the process of recording POV demos with the in-game Demo Support system.

### In-game Demo Support
TF2 has a built in demo recording system similar to P-REC, a now deprecated POV recording plugin. You can access it's settings using the ingame Advanced Options UI, under the Demo Support category. We will also include some essential commands to include in your own configs below this guide, as well as all "DS" commands available to set. Whilst the UI should work for most people, we do recommend setting some of these commands in your own configs to ensure you are never caught not recording.

- #### Recording Mode
    - *Manual*
        - TF2 will **not** record demos automatically. Recordings must be manually started or stopped using the `ds_record` / `ds_stop` commands in the developer console. 
        - **Not Recommended**.
    - *Auto-Record Competitive Matches*
        - TF2 will automatically record all matches played within Competitive Matchmaking. Please note this will **not** record matches played with `mp_tournament 1` set, which is relied upon for ozfortress servers.
        - **Not Recommended**.
    - *Auto-Record All Matches*
        - TF2 will automatically record all matches played, regardless of whether or not it is public games, scrims or official matches. This includes matches played with `mp_tournament 1` set, which is relied upon for ozfortress servers.
        - **Player Discretion**.
    - *Auto-Record Tournament Matches*
        - TF2 will automatically record all matches played with `mp_tournament 1` set. This option is ideal as the only other matches it will possibly record are Mann vs. Machine games.
        - **Recommended**.
- #### Filename prefix
    - Appends a prefix at the beginning of the filename for any demos recorded by Demo Support. We encourage players to set this to their username, so if they are asked to submit their POV demos for review, it is easier for them and us to organize their submissions.
- #### Play sound for start/stop events
    - Allows you to set an audio notification for when a demo recording starts or stops.
- #### Log events
    - Allows you to set up event logging, which logs to an `_events.txt` file within your demos folder. This works similarly to P-REC's old logging.
- #### Location of the in-game notifications
    - Allows you to set where notifications of recording appear:
        - *Console only*
        - *Console and chat window*
        - *Console and HUD*
- #### Auto-save a scores screenshot at the end of a match
    - Allows you to automatically save a screenshot of the in-game scoreboard when a game ends. This is saved using Steam's screenshot system. This is not a requirement, but is always a good backup to have in the event of logs.tf not working.
- #### Min killstreak count
    - Set how many kills are required before they are logged as a killstreak.
- #### Max time between kills
    - Set how many seconds between kills is needed before the killstreak is reset to zero.
- #### Auto-delete recordings
    - Automatically delete recordings with no associated bookmark or killstreaks. **We urge you to keep this setting off**.

The portion of this guide used above was based on RGL's `Recording POVs` guide, which can be found [here](https://docs.rgl.gg/guides/basics/pov/#method-1-in-game-demo-support).

### In-game Demo Support system commands
There are two essential commands we suggest adding to your `autoexec.cfg`:

#### ds_enable
- `ds_enable 3` - This enables the in-game Demo Support system, and sets the recording mode to *Auto-Record Tournament Matches*.
#### ds_autodelete
- `ds_autodelete 0` - This disables the automatic deletion of recordings with no associated bookmarks or killstreaks.

These commands enable demo recording for all tournament matches (matches using the `mp_tournament 1` command). Please also make sure to use `ds_autodelete 0` to prevent the game from deleting your demos if they don't have killstreaks or bookmark events attached.

For additional commands (all of which are present in the UI described above), we have listed them below:

#### ds_mark
- `ds_mark "comment"` - This is similar to P-REC's bookmark feature. You can bind this to a key, say `P` by doing:
    - `bind P "ds_mark 'Bookmark'"`
#### ds_status
- `ds_status` - This will show you the current status of the Demo Support system, including the current recording mode, the current filename prefix, and the current settings for the in-game notifications.
#### ds_stop
- `ds_stop` - This will stop the current recording.
#### ds_record
- `ds_record` - This will start a new recording.
#### ds_dir
- `ds_dir "directory"` - We recommend making a demos folder under `Team Fortress 2\tf` to store your demos. This command looks for any folder matching the name within the `tf` directory.
#### ds_enable
- `ds_enable 0/1/2/3` 
    - 0 - Manual
    - 1 - Auto-Record In-Game Competitive Matches (Competitive Matchmaking)
    - 2 - Auto-Record All Matches
    - 3 - Auto-Record Tournament (mp_tournament 1) Matches - **Recommended** - Records ozfortress matches.
#### ds_kill_delay
- `ds_kill_delay "15"` - Maximum time between kills for tracking kill streaks. Default is 15.
#### ds_log
- `ds_log 0/1` - Log killstreak and bookmark events to an associated .txt file.
#### ds_min_streak
- `ds_min_streak` - Minimum kill streak count before being recorded. Default is 4.
#### ds_notify
- `ds_notify 0/1/2` - Text output when recording start/stop/bookmark events : 0 - console, 1 - console and chat, 2 - console and HUD.
#### ds_prefix
- `ds_prefix "prefix"` - Will prefix files with this string. 24 characters max.
#### ds_screens
- `ds_screens 0/1` - Take screenshots of the scoreboard for non-competitive matches or the match summary stats for competitive matches. For competitive matches, it will not capture the screenshot if you disconnect from the server before the medal awards have completed. Default is 1/enabled.
    - Please note, if you close the scoreboard before the screens feature can take the screenshot, it will fail.
#### ds_sound
- `ds_sound 0/1` - Play start/stop sound for demo recording. Default is 1/enabled.

### Manual Demo Recording
Manual recording is not something we support or encourage, so we won't be covering it here beyond the commands listed above.

### How do I view my POV demos?
It's pretty simple. If you know the exact name of the demo (excluding the `.dem` file extension), you can type `playdemo demoname` in your developer console. If you want to be able to browse your POV demos, we would suggest typing in and using `demoui` in your developer console. This will open a UI that allows you to browse your demos, and play them back.

### How long do I need to keep my POV demos?
As per [8.9. Demo Recording in our Global Ruleset](https://docs.ozfortress.com/rules/global/?h=demo#89-demo-recording), players need to keep their official match POV demos for at minimum two seasons.