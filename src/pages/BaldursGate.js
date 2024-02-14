// Baldur's Gate.js
import React from 'react';
import LongCard from '../LongCard';
import QuoteCard from '../QuoteCard';
import { Accordion, AccordionBody } from 'react-bootstrap';

const BaldursGate = () => (
    <div>
        <h1>Baldur's Gate Quotes</h1>
        <br/>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><QuoteCard text="Companions"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <LongCard
                            imageUrl="https://bg3.wiki/w/images/3/34/Minthara-levelup-screen.png"
                            title="Minthara"
                            text="Just give the word and I will kill the clown. We would be praised as heroes."
                        />
                        <LongCard
                            imageUrl="https://bg3.wiki/w/images/f/f5/Karlach-character-creator.png"
                            title="Karlach"
                            text="But loneliness that deep gets into the marrow. Now that I'm here - among friends - I can feel it burning out of me. Little by little, step by step."
                        />
                        <LongCard
                            imageUrl="https://bg3.wiki/w/images/4/49/Wyll-character-creator.png"
                            title="Wyll"
                            text="It's been seven years since I left. It's no paradise - but it's home. And it's worth saving."
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <LongCard
                            imageUrl="https://bg3.wiki/w/images/5/58/Astarion_Default.webp"
                            title="Astarion"
                            text="I am so much more than what you made me."
                        />
                    </div>                        
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><QuoteCard text="NPCs"/></Accordion.Header>
                <AccordionBody>                    
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <LongCard
                            imageUrl="https://bg3.wiki/w/images/5/55/Withers-face.png"
                            title="Withers"
                            text="Fate spins along, as it should."
                        />        
                        <LongCard
                            imageUrl="https://bg3.wiki/w/images/b/b3/BOOOAL.jpg"
                            title="BOOOAL"
                            text="Kiss my arse. I'm the lord of murder - I'll show you why."
                        />        
                        <LongCard
                            imageUrl="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/owlbear-cub.jpg?q=50&fit=crop&w=1500&dpr=1.5"
                            title="Owlbear Cub"
                            text="You smell very delicious, but I will not bite you."
                        />
                    </div>                        
                </AccordionBody>
            </Accordion.Item>
        </Accordion>                        
    </div>    
);

export default BaldursGate;