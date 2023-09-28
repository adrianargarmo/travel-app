import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutInformation = {
    title: 'The Solo Traveler',
    description: 'We are here to help you start your solo travel experience and make help you make smart and informed desicions about your trip!',
    mission: 'We want to provide solo travelers with an assurance of safety on their travels.',
    safetyRatings: 'Our saftey ratings help travelers consult and compare destination safety. We provide an overall safety score and scores for six categories: womens safety, health, physical threats, theft, political freedom and LGBTQ safety. The scores are powered by the GeoSure GeoSafeScores algorithm which analyzes crime, health and economic data, official travel alerts, local reporting and a variety of other sources. ',
    travelerReviews: 'You may also see what previous travelers have to say about a destination by visiting the Destination Reviews.'
  };
  safetyRatingInformation = {
    Overall: 'An objective measure of the safety quality at location reflecting a harmonic average of safety conditions including forms of violence, property loss, health factors, and basic freedoms.',
    'LGBTQ+': 'Safety from all forms of mistreatment, discrimination, and violence committed against LGBTQ+ persons or groups.',
    'Heath And Medical': 'Safety from the effects of inadequate access to medical care, deficient local hygiene, and water or air contamination.',
    'Physical Harm': 'Safety from all forms of physical harm.',
    'Basic Freedom': 'Safety from arbitrary detention, discriminatory laws, oppressive restrictions, or lack of due process.',
    Theft: 'Safety from loss of personal or community property by force or other non-forceful means.',
    Women: 'Safety from all forms of mistreatment, unwanted attention, and violence committed against person show identify as female.'
  };
  safetyRanges = [
    { label: 'N/A', range: '0' },
    { label: 'Least Safe', range: '1-30' },
    { label: 'Unstable', range: '31-60' },
    { label: 'Less Safe', range: '61-80' },
    { label: 'Very Safe', range: '81-100' }
  ];
}