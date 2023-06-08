## Global Context

The global context should have the current state of what journeys the user is looking at.

we could get the journeys from the

# Infinite scroll examples

https://ellismin.com/2020/05/next-infinite-scroll/
https://www.youtube.com/watch?v=lVgF2OziomM
https://www.youtube.com/watch?v=uFuOPlOk0sQ

## Happy Path

### Browsing curator items

when the guest visits the home page curator component will make a call to the BE and load a set of items specific to the current guest
- initially we will simply load what we have 
- a filter option will be provided to allow the curator component to query the BE for a specific set of items. i.e. stays(homes | yachths), events, 

 loads it will pull data from the api and display what aver items is returned. from here the user is able to scroll through the items in the curation

when the user clicks an item in the curation a new curartion will be created and the item thaat was clicked will become the lead item in the newly created curation.

- the item will load up first in an expanded view then then the related curations will be lazy loaded.

if the user clicks back the curation history will be used to return the latest set of items (curation); the curatror will keep track of the curation history.

- items in a curation will maintain their state. so if an item was in an active state before the user left the last curatrion then it will remain in that state in the event that the user comes back to the same curation.

## Adding experiences to journeys

When the guest expands an experience they will be presented with the option to add it to a journey

- if the guest chooses to add the experinece to a journey the current journeys in the context will be loaded.
  --> create global state that will contain the current journeys and what ever.
  - what
- the guest will choose from the list of journeys.
- if there are no journeys already created then the guest will
