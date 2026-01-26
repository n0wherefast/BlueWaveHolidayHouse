import React from 'react'

function jsonLD() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Blue Wave Holiday House",
    "description": "Blue Wave: stylish coastal apartments with curated comforts, clear policies, and local recommendations — book your memorable stay.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aci Trezza",
      "addressLocality": "Aci Trezza",
      "addressRegion": "Sicilia",
      "postalCode": "95021",
      "addressCountry": "IT"
    },
    "telephone": "+39 123 456 7890",
    "url": "https://www.bluewaveholidayhouse.com/",
    "image": "https://www.bluewaveholidayhouse.com/image.jpg",
    "checkinTime": "14:00",
    "checkoutTime": "10:00",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "WiFi",
        "value": "Free"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": "Free"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Kitchen",
        "value": "Fully equipped"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5703,
      "longitude": 14.9511
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}

export default jsonLD
