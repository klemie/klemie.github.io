import React from 'react'
import { IonCard, IonCardContent, IonCardTitle, IonCol,IonRow, IonGrid, IonContent, IonImg, IonThumbnail } from '@ionic/react';
// Icons import
// import { } from 'ionicons/icons'

const Education: React.FC = () => {
    type Image = {
        src: string;
      };
    const item: Image[] = [{ src: '/public/assets/UVic-Logo.png'}];
      
    return(
        <IonCard>
            <IonCardContent>
               <IonGrid>
                   <IonRow>
                       <IonCol>
                            <IonContent>
                                <IonThumbnail>
                                    <IonImg src="/public/assets/UVic-Logo.png" />

                                   
                                </IonThumbnail>
                                {/* {item.map((image) =>(
                                    <IonImg src={image.src}>
                                ))}; */}
                                {/* <IonImg src="./public/assets/UVic-logo.png"></IonImg> */}
                            </IonContent>
                       </IonCol>
                   </IonRow>
               </IonGrid>
            </IonCardContent>
        </IonCard>

    );
};

export default Education;