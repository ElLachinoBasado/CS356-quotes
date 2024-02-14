// Fire Emblem.js
import React from 'react';
import PortraitCard from '../PortraitCard';
import TitleCard from '../TitleCard';
import { Accordion, AccordionBody } from 'react-bootstrap';

const FireEmblem = () => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <h1>Fire Emblem Quotes</h1>
        <br/>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><TitleCard title="Shadow Dragon" imageUrl="https://assets-prd.ignimgs.com/2022/01/08/fe-shadowdragon-dontstealfromignyo-1641675783008.jpg"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>                        
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/3/36/Portrait_marth_fe11.png"
                            title="Marth"
                            text="I am a prince before I am a son or a brother."
                        />
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/d/df/Portrait_caeda_fe11.png"
                            title="Caeda"
                            text="A kingless country is a country still; but a king without subjects rules naught but hills."
                        />
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/5/5c/Portrait_cain_fe11.png"
                            title="Cain"
                            text="This indignity is too much to bear! One day I will repay them in kind. I will avenge the fallen…I swear it!"
                        />
                    </div>                    
                    <br/>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>                        
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/b/bd/Portrait_midia_fe11.png"
                            title="Midia"
                            text="Archanea is saved. If Princess Nyna has truly come to chase the enemy from our halls, to free us... Then my death will have meaning."
                        />
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/7/7f/Portrait_camus_fe11.png"
                            title="Camus"
                            text="I have lived as a knight, and I intend to die as one. There are no other roads left for me to walk."
                        />
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/c/c7/Portrait_marth_prologue_fe11.png"
                            title="Marth"
                            text="Yow! It's an enemy ambush!"
                        />
                    </div>                    
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><TitleCard title="New Mystery of the Emblem: Heroes of Light and Shadow" imageUrl="https://cdn2.steamgriddb.com/grid/b75cf041c6b64be620d7e4f9be53f319.png"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>                        
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/3/39/Portrait_jagen_fe12.png"
                            title="Jagen"
                            text="Even though I, Jagen, am old and senile, I will not lose to the likes of you."
                        />
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/e/e9/Portrait_navarre_fe11.png"
                            title="Navarre"
                            text="I have no words for a corpse."
                        />
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/f/fc/Portrait_jeorge_fe11.png"
                            title="Jeorge"
                            text="If you hadn't gotten so close you wouldn't have needed to die. Pitiful fool..."
                        />
                    </div>                    
                </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><TitleCard title="Echoes: Shadows of Valentia" imageUrl="https://upload.wikimedia.org/wikipedia/en/9/98/Fire_Emblem_Echoes_cover.png"/></Accordion.Header>
                <AccordionBody>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>                        
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/0/0d/Portrait_celica_status_fe15.png"
                            title="Celica"
                            text="There's more to be done than simply fighting the foes laid before us."
                        />
                        <PortraitCard
                            imageUrl="https://i.kym-cdn.com/photos/images/original/001/239/421/916.png"
                            title="Catria"
                            text="This world doesn't exist as a plaything for dragons!"
                        />
                        <PortraitCard
                            imageUrl="https://cdn.fireemblemwiki.org/6/61/FESoV_Leon.png"
                            title="Leon"
                            text="Your fetish for power is simply barbaric. Where's the joy? The love? Your perfect world is as dull as dirt."
                        />
                    </div>                    
                </AccordionBody>
            </Accordion.Item>            
        </Accordion>                                        
    </div>  
);

export default FireEmblem;