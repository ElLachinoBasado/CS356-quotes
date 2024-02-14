// Fire Emblem.js
import React from 'react';
import PortraitCard from '../PortraitCard';

const FireEmblem = () => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <h1>Fire Emblem Quotes</h1>
        <br/>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/3/36/Portrait_marth_fe11.png"
                title="Marth"
                text="I am a prince before I am a son or a brother."
            />
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/4/4d/Portrait_frederick_fe13.png"
                title="Frederick"
                text="Pick a god and pray!"
            />
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/c/cd/Portrait_nasir_fe09.png"
                title="Nasir"
                text="Much of what seems good and evil is simply a matter of perspective."
            />            
        </div>
        <br/>          
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/d/df/Portrait_caeda_fe11.png"
                title="Caeda"
                text="A kingless country is a country still; but a king without subjects rules naught but hills."
            />
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/0/0d/Portrait_celica_status_fe15.png"
                title="Celica"
                text="There's more to be done than simply fighting the foes laid before us."
            />
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/f/fd/Portrait_lucina_fe13.png"
                title="Lucina"
                text="I challenge my fate!"
            />         
        </div>
        <br/>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/7/70/Portrait_roy_fe06.png"
                title="Roy"
                text="I might sound naive, but I don't consider a victory with casualties to be a true victory."
            />
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/5/53/Medium_portrait_ike_hero_fe10.png"
                title="Ike"
                text="Woman or man, if you stand against me here, I have to cut you down."
            />
            <PortraitCard
                imageUrl="https://cdn.fireemblemwiki.org/3/39/Portrait_jagen_fe12.png"
                title="Jagen"
                text="Even though I, Jagen, am old and senile, I will not lose to the likes of you."
            />         
        </div>
    </div>  
);

export default FireEmblem;