## How to Book/Reserve a Game Server

Bookings/Reservations are made via [au.serveme.tf](https://au.serveme.tf/), Australia's only server provider. Simply click "Get server" or navigate to the Reservations tab and follow the prompts. For a full list of commands, please refer to [au.serveme.tf's FAQ page](https://au.serveme.tf/faq) - you can find a basic list of commands below as well:

[**Click here to Book a Game Server**](https://au.serveme.tf/)

### **Using au.serveme.tf!**
[au.serveme.tf](https://au.serveme.tf) make use of *Valve's SDR* permanently, meaning there are some differences from how you used to use bookable servers. *Valve SDR* acts like a VPN of sorts for the server, preventing certain protocols like RCON from working typically. Because of this, servers using *Valve's SDR* need to come up with solutions, and in the case of bookable servers - a way to grant RCON control of some variety to the person booking the server. 

#### **Controlling your server**
serveme.tf accomplishes this in two ways, kind of. When using an [au.serveme.tf](https://au.serveme.tf) server, you can opt to either send commands in the game chat via `!rcon command-goes-here`, or use the Web RCON button found on your booking's reservation page. You can also use `!webrcon` in game chat to open a MOTD display with the *Web RCON* console open. You'll notice earlier we said "kind of", but the two options we listed are full RCON control of the server, so what gives? When booking the server, you get the opportunity to set the map, config and whitelist. But these controls aren't limited to the booking period - they are also available whenever via the "Edit" button on your reservation page. You can change all of the aforementioned server options here as well!

#### **Booking/reserving your server**
"Ok, you've told us how to control our server, but not how to book one" is probably what you are wondering, or not, it is pretty simple. Navigate to [au.serveme.tf](https://au.serveme.tf) home page, and you'll find two options. You can choose either "Get server" or "1-click server", but for now we recommend "Get server". Upon clicking the button, you'll be redirected to a page where you can configure the server as you like, with the same server options we discussed earlier, and some new ones. It's all easy enough, just follow through with the prompts!

### Commands
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

### Executing configs
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

### Provided by you, our community!
Without our Patreon members, we would not be able to bring you servers! Patreon members receive special booking/reservation perks - if you are interested in subscribing, see our [Patreon](https://patreon.com/ozfortress).

### Premium
Thank you to au.serveme.tf for their support in getting ozfortress setup with servers. We offer [Patreon Tiers which include au.serveme.tf Premium membership](https://patreon.com/ozfortress), or alternatively you can get Premium through the au.serveme.tf website. Below are a list of perks that come with either Premium Membership option:
* More than 1 Reservation at a time
* Longer Reservations (5h instead of 2h)
* Make Reservations more than 3 hours ahead of time
* Upload your own Custom Maps