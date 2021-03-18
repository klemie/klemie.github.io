import React, { useRef, useState} from 'react';
import { IonApp, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonText, IonTitle} from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
// Icons if needed
import { chevronDownOutline } from 'ionicons/icons'

/* Theme variables */
import './theme/variables.css';

/* Component Imports */
import Education from './components/Education'

const App: React.FC = () => {
// Logical functions 
  const educationButtonRef = useRef<HTMLIonButtonElement>(null);
  // const [] = useState<>();
  //Front end UI
return(

  <React.Fragment> 
    <IonApp >
      <IonContent color="dark">
        {/* Profile and References*/}

        {/* Main Content */}
        {/* Grid organization */}
        <IonGrid>
          <IonRow>
            <IonCol>
            {/* Education */}
             <IonButton  expand="block" size="large" color="light">
                <IonText>Education</IonText>
                <IonIcon slot="end" id="eduDown" class="ion-float-right" icon={chevronDownOutline}></IonIcon>
             </IonButton>
                {/* Show Imported Education module if button is triggered  */}
                <Education />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            {/* Technical Skills */}
             <IonButton expand="block" size="large" color="light">
                <IonText>Technical Skills</IonText>
                <IonIcon slot="end" id="eduDown" class="ion-float-right" icon={chevronDownOutline}></IonIcon>
             </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* Projects */}
              <IonButton expand="block" size="large" color="light">
                <IonText>Projects</IonText>
                <IonIcon slot="end" id="eduDown" class="ion-float-right" icon={chevronDownOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* Competencies */}
              <IonButton expand="block" size="large" color="light">
                <IonText>Competencies</IonText>
                <IonIcon slot="end" id="eduDown" class="ion-float-right" icon={chevronDownOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* Experience */}
              <IonButton expand="block" size="large" color="light">
                <IonText>Experience</IonText>
                <IonIcon slot="end" id="eduDown" class="ion-float-right" icon={chevronDownOutline}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  </React.Fragment>
  );
};

export default App;
