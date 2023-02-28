## How to Book/Reserve a Game Server

Bookings/Reservations are made via [au.serveme.tf](https://au.serveme.tf/). Simply click "Get server" or navigate to the Reservations tab and follow the prompts. For a full list of commands, please refer to [au.serveme.tf's FAQ page](https://au.serveme.tf/faq) - you can find a basic list of commands below as well:

[**Click here to Book a Game Server**](https://au.serveme.tf/)

### **Using au.serveme.tf!**
[au.serveme.tf](https://au.serveme.tf) no longer makes use of *Valve SDR*, thus the standard RCON controls you are used to will work on [au.serveme.tf](https://au.serveme.tf) servers.

#### **Options for controlling your server**
serveme.tf accomplishes this in multiple ways. When using an [au.serveme.tf](https://au.serveme.tf) server, you can opt to either send commands in the game chat via `!rcon command-goes-here`, use the Web RCON button found on your booking's reservation page, or use an RCON password like you are probably more familiar with already. You can also use `!webrcon` in game chat to open a MOTD display with the *Web RCON* console open. When reserving the server, you also get the opportunity to set the map, config and whitelist. There are a lot of options here, but all function very much the same. As such, we'll only explain the standard RCON password method further, but note you can use `!rcon command-goes-here` in chat with the same commands (please note, typing `!rcon` without a command in chat will give you a permissions error).

##### **Using RCON password to control your server**
Many may already be familiar with this method, but if you aren't that's ok! This quick guide will give you the basics. When you reserve a server, you are given an option to set your own server password and RCON password. We recommend setting both to something secure, but please note that players will need the server password to connect. The RCON password however, should only ever be given to administrators, or captains of another team upon request. So don't go using a personal password for this, but make it something easy to remember! All server details from your booking save, so they'll be right there waiting for you next time you reserve a server. If you forget your RCON password, you can grab it again off your reservation page!

With the RCON password, you need to enter `rcon_password password` where the second password is your RCON password, in the in-game console. You will need to enable the in-game console via the Developer options in TF2's settings. With the RCON password entered, you can run any of the configs, maps or other commands listed below.

#### **Booking/reserving your server**
"Ok, you've told us how to control our server, but not how to reserve one" is probably what you are wondering, or not, it is pretty simple. Navigate to [au.serveme.tf](https://au.serveme.tf) home page, and you'll find two options. You can choose either "Get server" or "1-click server", but for now we recommend "Get server". Upon clicking the button, you'll be redirected to a page where you can configure the server as you like, with the same server options we discussed earlier, and some new ones. It's all easy enough, just follow through with the prompts!

### **Commands**

##### **Configs, Aliases & Maps**

##### **!rcon and Web RCON**
The following commands are executed via/in the in-game chat:

##### `!rcon command-goes-here`
This runs a command on the server, for example you can run "!rcon changelevel koth_product" to change the map on the server to Product. Running `!rcon` without a command will error out saying you do not have access.
*Note: This command can only be used by the person who reserved the server.*

##### `!webrcon`
This command will open a MOTD display on your screen with the *Web RCON* open, allowing you to control the server.
*Note: This command can only be used by the person who reserved the server.*

##### `!end`
Ends the reservation and kicks all players. There is also an *end button* available on your reservation page!
*Note: This command can only be used by the person who reserved the server.*

##### `!extend`
Extends the time of the reservation by 1 hour. However this will only work if the server is free to reserve. There is also an *extend button* available on your reservation page!

##### `!who`
Steam nickname of the person that reserved the server.

##### `!timeleft`
Minutes left in the reservation.

### **Executing configs**
au.serveme.tf has a set of aliases that can be executed to save needing to remember complicated config names. We've put a list of the config aliases below:

+ `ozf`
  + Executes *ozfortress_6v6_5cp*
+ `ozf-6s-standard` & `ozf-6s-5cp`
  + Executes *ozfortress_6v6_5cp*
+ `ozf-6s-scrim`
  + Executes *ozfortress_6v6_scrim*
+ `ozf-6s-golden`
  + Executes *ozfortress_6v6_golden_cap*
+ `ozf-6s-koth`
  + Executes *ozfortress_6v6_koth*
+ `ozf-hl-stopwatch` & `ozf-hl-payload`
  + Executes *ozfortress_hl_stopwatch*
+ `ozf-hl-standard` & `ozf-hl-5cp`
  + Executes *ozfortress_hl_5cp*
+ `ozf-hl-golden`
  + Executes *ozfortress_hl_golden_cap*
+ `ozf-hl-koth`
  + Executes *ozfortress_hl_koth*
+ `ozf-ud-ultiduo`
  + Executes *ozfortress_ultiduo*
+ `ud`
  + Executes *ozfortress_ultiduo*

If for whatever reason the above aliases do not work, you can use the config name below each alias (in italics) combined with your chosen method of RCON. For example, `rcon exec ozfortress_6v6_5cp`.

### **Provided by you, our community!**
Without our Patreon members, we would not be able to bring you servers! Patreon members receive special booking/reservation perks - if you are interested in subscribing, see our [Patreon](https://patreon.com/ozfortress).

### **Premium**
Thank you to au.serveme.tf for their support in getting ozfortress setup with servers. We offer [Patreon Tiers which include au.serveme.tf Premium membership](https://patreon.com/ozfortress). Below are a list of perks that come with Premium Membership:
* More than 1 Reservation at a time
* Longer Reservations (5h instead of 2h)
* Make Reservations more than 3 hours ahead of time
* Upload your own Custom Maps