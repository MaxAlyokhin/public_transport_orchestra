## Concerto for public transport orchestra in four movements

Performed by the collective of drivers of the Krasnodar Tram and Trolleybus Department

![](https://orchestra.stranno.su/design.png)

https://orchestra.stranno.su

Stack: HTML5, Sass, JavaScript, Gulp, Web Audio API, Leaflet + OpenStreetMap + Stamen

The algorithm regularly receives data about the movement of public transport from a server in Latvia, which provides this data to several transportation services in several cities in Russia and the Baltic States, and read the data into several arrays, which contain information about the speed, type of transport, route and coordinates. Then, based on this data, markers of moving vehicles are drawn on the map.

In parallel, the algorithm generates an array of tone frequencies within a equally tempered scale:
- for the first part: from the small octave note D (146.8324 Hz) upwards in a quarter-tone scale (24 notes per octave);
- for the second part: from the note A of the contra-octave (55.0000 Hz) upwards in semitone scale (7 notes per octave);
- for the third part: from the note in A of the contra-octave (55.0000 Hz) upwards in an eighth-tone scale (48 notes per octave);
- for the fourth part: from the B note of the first octave (493.8832 Hz) upwards in 300-tone scale (300 notes per octave);

In the following, the algorithm will map each of the tones to a velocity in km/h such that the higher the velocity, the higher the tone.

The first two parts calculate the average traffic speed and monitor its change. If the average traffic speed in the city increases, the distance between tones over time decreases (tones are played more often). In case the average traffic speed decreases, the distance between tones increases (tones are played less frequently).

In the third and fourth parts, the distance between tones is fixed.

All issues related to transport data are handled by the entity (javascript method) transportSupervisor, which acts as a dispatcher, observing the traffic of each public transport salon in the city.

TransportSupervisor passes all this data to another entity, orchestraConductor, which performs the tasks of a conductor, a sound manager who makes the final decision about which sounds, in what order, of what duration and frequency will be played at each moment in the composition. Having determined the frequency of the tone and the duration to the next, the conductor passes this data to a third entity, the toneGenerator, whose task is to generate a fading sine wave within the specified parameters.

The salons whose tone is being played at the moment are highlighted on the map. A detailed description of all of the conductor's actions and a report on the movement of transport can be observed in the score, which is formed right during the performance.

(although it could be argued about score: if we proceed from the fact that the score is an algorithm of actions for extracting sounds, then the program code itself can be called a score, which determines the sound; on the other hand, the score can be understood as a record of notes that actually sounded in a particular sequence, which is in fact a textual documentation of the composition)