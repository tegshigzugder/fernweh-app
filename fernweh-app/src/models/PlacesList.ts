interface Place {
    placeId: number;
    formattedAddress: string;
    rating: number;
    userRatingCount: number;
    displayName: {
      displayNameId: number | null;
      text: string;
      languageCode: string;
    };
  }
  
  export interface PlacesList {
    places: Place[];
  }
  
