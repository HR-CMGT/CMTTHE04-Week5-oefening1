# CMTTHE04 Week5 oefening 1

## Inheritance

In [week 3 hebben we een pong game gebouwd met composition](https://github.com/HR-CMGT/CMTTHE04-Week3-oefening1). In [week 4-oefening 2](https://github.com/HR-CMGT/CMTTHE04-Week4-oefening2) kan je daar schermen aan toevoegen. Je kan verder gaan met deze code, of je kan dit project als startpunt gebruiken voor de oefening met Inheritance. 

## Opdracht

Gebruik inheritance om de **overeenkomstige eigenschappen** én de **overeenkomstige functies** van *Ball* en *Paddle* in een GameObject class te plaatsen. 

**GameObject**
```
class GameObject {
    constructor() {
        console.log("I am a gameobject")
    }
}
```

## Opdracht

Ball en Paddle erven van GameObject en krijgen daardoor automatisch de properties en methods van GameObject. Gebruik `Extends` en `super()` om te overerven. Je kan `private` in de parent veranderen in `protected` (Encapsulation).

```
class Ball extends GameObject {
    constructor() {
        super()
    }
}
```
## Opdracht

Als een functie in een child dezelfde naam heeft als een functie in de parent, dan wordt alleen de functie van het child uitgevoerd. Als je ook de update functie van de parent wil blijven gebruiken dan kan je dat doen met `super.update()`

Kan je dit principe toepassen in Pong?

```
class GameObject {
    public update() : void {
        console.log("Gameobject is updating!")
    }
}
class Ball extends GameObject {
    public update() : void {
        super.update()
        console.log("Ball is updating!")
    }
}
```

## Opdracht

Maak de game helemaal af met:

- Multiplayer. Twee (of meer) paddles met eigen controls.
- Score per player bijhouden.
- Oplopende moeilijkheidsgraad naar mate de score hoger wordt (bv. snellere ballen, of meer ballen).
