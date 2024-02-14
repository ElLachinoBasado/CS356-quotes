// StreetFighter.js
import React from 'react';
import TitleCard from '../TitleCard';
import QuoteCard from '../QuoteCard';
import { Accordion, AccordionBody } from 'react-bootstrap';

const StreetFighter = () => (
    <div>
        <h1>Street Fighter Quotes</h1>
        <br/>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><TitleCard title="Ryu" imageUrl="https://sfgalleries.net/art/sf2/sf2ww/series1/ryu.gif"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="This is the path of my destiny!" />
                        <QuoteCard text="The answer lies in the heart of battle." />
                        <QuoteCard text="Hadouken!" />
                    </div>
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="Shin! Sho! Ryu! Ken!" />
                        <QuoteCard text="You must defeat Shen Long to stand a chance." />
                        <QuoteCard text="I'll scatter you!" />
                    </div>
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><TitleCard title="Ken" imageUrl="https://sfgalleries.net/art/sf2/sf2ww/series1/ken.gif"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="Outta my way." />
                        <QuoteCard text="You can't beat me!" />
                        <QuoteCard text="Bringing the heat!" />
                    </div>
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="It's all or nothing!" />                        
                    </div>
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><TitleCard title="Chun-Li" imageUrl="https://sfgalleries.net/art/sf2/sf2ww/series1/chunli.gif"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="I'm the strongest woman in the world!" />
                        <QuoteCard text="Justice will triumph in the end. I'm sure of it." />
                        <QuoteCard text="All of you should kneel before me!" />
                    </div>
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="Power is useless without skill and speed!" />      
                        <QuoteCard text="Using brute force alone will never defeat me." />                    
                    </div>     
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><TitleCard title="Blanka" imageUrl="https://sfgalleries.net/art/sf2/sf2ww/series1/blanka.gif"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="We all eat, then eventually get eaten. That's nature." />
                        <QuoteCard text="Seeing you in action was a joke." />
                        <QuoteCard text="Now the beast is unleashed!" />
                    </div>
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="I'm too smart!" />      
                        <QuoteCard text="Thinking too much will get you killed." />                    
                    </div>                    
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header><TitleCard title="Dhalsim" imageUrl="https://sfgalleries.net/art/sf2/sf2ww/series1/dhalsim.gif"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="Your fate has followed you." />
                        <QuoteCard text="This is the power of yoga!" />
                        <QuoteCard text="Peace and tranquility... This is the way of Yoga!" />
                    </div>
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="I will meditate and then destroy you." />                    
                    </div>
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header><TitleCard title="E. Honda" imageUrl="https://sfgalleries.net/art/sf2/sf2ww/series1/ehonda.gif"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="Might makes right!" />
                        <QuoteCard text="Time for lunch!" />
                        <QuoteCard text="DOSUKOI!" />
                    </div>
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header><TitleCard title="Zangief" imageUrl="https://sfgalleries.net/art/sf2/sf2ww/series1/zangief.gif"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="Behold this body of iron!" />
                        <QuoteCard text="Power is justice!" />
                        <QuoteCard text="I am the Red Cyclone. I destroy everything in my path!" />
                    </div>
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="Tchaikovsky! Stravinsky!" />
                        <QuoteCard text="My loyal fans!" />
                        <QuoteCard text="No mercy. No remorse!" />
                    </div>
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header><TitleCard title="Guile" imageUrl="https://sfgalleries.net/art/sf2/sf2ww/series1/guile.gif"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="Go home and be a family man!" />
                        <QuoteCard text="There's no place for emotion in battle." />
                        <QuoteCard text="Easy operation." />
                    </div>
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <QuoteCard text="I'm the repo man and your butt is mine!" />
                        <QuoteCard text="You're qualified for combat, but not for victory!" />
                        <QuoteCard text="Make no mistake. I'm always the last one standing." />
                    </div>
                </AccordionBody>

            </Accordion.Item>            
        </Accordion>        
    </div>
)

export default StreetFighter;