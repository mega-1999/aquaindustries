export interface StateLink {
  label: string;
  url: string;
  tooltip?: string;
  logo: string;
}

export interface StateData {
  state: string;
  links: StateLink[];
}

export const stateData: StateData[] = [
  {
    state: "Alabama",
    links: [
      {
        label: "Standard Drawings",
        url: "https://alletting.dot.state.al.us/Docs/Standard_Drawings/StdDrawingSelect.html",
        tooltip: "Alabama standards available",
        logo: "https://www.google.com/s2/favicons?domain=alletting.dot.state.al.us&sz=64",
      },
    ],
  }, {
    state: "Alaska",
    links: [
      {
        label: "Standard Plans",
        url: "https://dot.alaska.gov/stwddes/dcsprecon/standardplans.shtml",
        tooltip: "Alaska standards available",
        logo: "https://www.google.com/s2/favicons?domain=dot.alaska.gov&sz=64",
      },
    ],
  },
  {
    state: "Arizona",
    links: [
      {
        label: "Roadway Standard Drawings",
        url: "https://azdot.gov/business/engineering-and-construction/roadway-engineering/roadway-design/construction-standard",
        tooltip: "Arizona standards available",
        logo: "https://www.google.com/s2/favicons?domain=azdot.gov&sz=64",
      },
      {
        label: "Bridge Structure Detail Drawings",
        url: "https://azdot.gov/business/engineering-and-construction/bridge/bridge-design-services/structure-detail-drawings",
        tooltip: "Other Arizona standards",
        logo: "https://www.google.com/s2/favicons?domain=azdot.gov&sz=64",
      },
    ],
  },
  {
    state: "Arkansas",
    links: [
      {
        label: "Standard Roadway Drawings",
        url: "https://www.ardot.gov/divisions/roadway-design/standard-roadway-drawings/",
        tooltip: "Arkansas standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.ardot.gov&sz=64",
      },
      {
        label: "List of Standard Drawings",
        url: "https://www.ardot.gov/divisions/bridge/list-of-standard-drawings/",
        tooltip: "Other Arkansas standards",
        logo: "https://www.google.com/s2/favicons?domain=www.ardot.gov&sz=64",
      },
    ],
  },
  {
    state: "California",
    links: [
      {
        label: "Standard Plans",
        url: "https://dot.ca.gov/programs/design/manual-highway-design-manual-hdm/cadd-hd",
        tooltip: "California standards available",
        logo: "https://www.google.com/s2/favicons?domain=dot.ca.gov&sz=64",
      },
    ],
  },
  {
    state: "Colorado",
    links: [
      {
        label: "M Standards",
        url: "https://www.codot.gov/business/designsupport/mstandards",
        tooltip: "Colorado standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.codot.gov&sz=64",
      },
      {
        label: "S Standards",
        url: "https://www.codot.gov/safety/traffic-safety/design/s-standards",
        tooltip: "Other Colorado standards",
        logo: "https://www.google.com/s2/favicons?domain=www.codot.gov&sz=64",
      },
    ],
  },
  {
    state: "Connecticut",
    links: [
      {
        label: "Standard Drawings and Details",
        url: "https://www.ct.gov/dot/cwp/view.asp?a=3212&q=414742",
        tooltip: "Connecticut standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.ct.gov&sz=64",
      },
    ],
  },
  {
    state: "Delaware",
    links: [
      {
        label: "Construction Details",
        url: "https://www.deldot.gov/Publications/manuals/const_details/",
        tooltip: "Delaware standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.deldot.gov&sz=64",
      },
    ],
  },
  {
    state: "District of Columbia",
    links: [
      {
        label: "Standard Specifications for Highways and Structures",
        url: "https://ddot.dc.gov/page/standard-specifications-and-drawings",
        tooltip: "District of Columbia standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=ddot.dc.gov&sz=64",
      },
    ],
  },
  {
    state: "Florida",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.fdot.gov/design/standardplans/",
        tooltip: "Florida standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.fdot.gov&sz=64",
      },
    ],
  },
  {
    state: "Georgia",
    links: [
      {
        label: "Construction Standards and Details",
        url: "http://mydocs.dot.ga.gov/info/gdotpubs/ConstructionStandardsAndDetails/Forms/AllItems.aspx",
        tooltip: "Georgia standards available",
        logo: "https://www.google.com/s2/favicons?domain=mydocs.dot.ga.gov&sz=64",
      },
    ],
  },
  {
    state: "Guam",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.guamtransportationprogram.com/about-the-program/design-and-construction-resources",
        tooltip: "Guam standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=www.guamtransportationprogram.com&sz=64",
      },
    ],
  },
  {
    state: "Hawaii",
    links: [
      {
        label: "Standard Plans",
        url: "https://hidot.hawaii.gov/highways/s2005-standard-specifications/",
        tooltip: "Hawaii standards NOT available",
        logo: "https://www.google.com/s2/favicons?domain=hidot.hawaii.gov&sz=64",
      },
    ],
  },
  {
    state: "Idaho",
    links: [
      {
        label: "Standard Drawings",
        url: "https://apps.itd.idaho.gov/apps/StandardDrawings/StandardDrawings.htm",
        tooltip: "Idaho standards available",
        logo: "https://www.google.com/s2/favicons?domain=apps.itd.idaho.gov&sz=64",
      },
    ],
  },
  {
    state: "Illinois",
    links: [
      {
        label: "Highway Standards",
        url: "https://idot.illinois.gov/doing-business/industry-marketplace/construction-services/highway-standards-and-district-specific-details.html",
        tooltip: "Illinois standards available",
        logo: "https://www.google.com/s2/favicons?domain=idot.illinois.gov&sz=64",
      },
    ],
  },
  {
    state: "Indiana",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.in.gov/dot/div/contracts/standards/drawings/",
        tooltip: "Indiana standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.in.gov&sz=64",
      },
    ],
  },
  {
    state: "Iowa",
    links: [
      {
        label: "Standard Road Plans",
        url: "https://iowadot.gov/design/standard-road-plans",
        tooltip: "Iowa standards available",
        logo: "https://www.google.com/s2/favicons?domain=iowadot.gov&sz=64",
      },
    ],
  },
  {
    state: "Kansas",
    links: [
      {
        label: "Standard Drawings",
        url: "https://kart.ksdot.org/StandardDrawings/",
        tooltip: "Kansas standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=kart.ksdot.org&sz=64",
      },
    ],
  },
  {
    state: "Kentucky",
    links: [
      {
        label: "Standard Drawings",
        url: "https://transportation.ky.gov/highway-design/pages/standard-drawings.aspx",
        tooltip: "Kentucky standards available",
        logo: "https://www.google.com/s2/favicons?domain=transportation.ky.gov&sz=64",
      },
    ],
  },
  {
    state: "Louisiana",
    links: [
      {
        label: "Standard Plans and Special Details",
        url: "http://wwwsp.dotd.la.gov/Inside_LaDOTD/Divisions/Engineering/Standard_Plans/Pages/",
        tooltip: "Louisiana standards available",
        logo: "https://www.google.com/s2/favicons?domain=wwwsp.dotd.la.gov&sz=64",
      },
    ],
  },
  {
    state: "Maine",
    links: [
      {
        label: "Standard Details",
        url: "https://www.maine.gov/dot/doing-business/bid-opportunities/standards",
        tooltip: "Maine standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.maine.gov&sz=64",
      },
    ],
  },
  {
    state: "Maryland",
    links: [
      {
        label: "Book of Standards for Highways and Incidental Structures",
        url: "https://apps.roads.maryland.gov/BusinessWithSHA/bizStdsSpecs/desManualStdPub/publicationsonline/ohd/bookstd/index.asp",
        tooltip: "Maryland standards available",
        logo: "https://www.google.com/s2/favicons?domain=apps.roads.maryland.gov&sz=64",
      },
    ],
  },
  {
    state: "Massachusetts",
    links: [
      {
        label: "Construction and Traffic Standard Details",
        url: "https://www.mass.gov/info-details/construction-standard-details",
        tooltip: "Massachusetts standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.mass.gov&sz=64",
      },
    ],
  },
  {
    state: "Michigan",
    links: [
      {
        label: "Standard Plans",
        url: "https://mdotjboss.state.mi.us/stdplan/standardPlansHome.htm",
        tooltip: "Michigan standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=mdotjboss.state.mi.us&sz=64",
      },
    ],
  },
  {
    state: "Minnesota",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.dot.state.mn.us/design/design-standards/standard-plans.html",
        tooltip: "Minnesota standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.state.mn.us&sz=64",
      },
    ],
  },
  {
    state: "Mississippi",
    links: [
      {
        label: "Standard Drawings",
        url: "https://mdot.ms.gov/portal/engineering_standards_guides_manuals",
        tooltip: "Mississippi standards available",
        logo: "https://www.google.com/s2/favicons?domain=mdot.ms.gov&sz=64",
      },
    ],
  },
  {
    state: "Missouri",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.modot.org/missouri-standard-plans-highway-construction",
        tooltip: "Missouri standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=www.modot.org&sz=64",
      },
    ],
  },
  {
    state: "Montana",
    links: [
      {
        label: "Detailed Drawings",
        url: "https://www.mdt.mt.gov/business/contracting/detailed-drawings.aspx",
        tooltip: "Montana standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.mdt.mt.gov&sz=64",
      },
    ],
  },
  {
    state: "Nebraska",
    links: [
      {
        label: "Standard Plans",
        url: "https://dot.nebraska.gov/business-center/design-consultant/stand-spec-manual/",
        tooltip: "Nebraska standards available",
        logo: "https://www.google.com/s2/favicons?domain=dot.nebraska.gov&sz=64",
      },
    ],
  },
  {
    state: "Nevada",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.dot.nv.gov/doing-business/about-ndot/ndot-divisions/engineering/design/standard-specifications-and-plans",
        tooltip: "Nevada standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.nv.gov&sz=64",
      },
    ],
  },
  {
    state: "New Hampshire",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.dot.nh.gov/doing-business-nhdot/contractors/standard-plans-road-construction",
        tooltip: "New Hampshire standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.nh.gov&sz=64",
      },
    ],
  },
  {
    state: "New Jersey",
    links: [
      {
        label: "Standard Details and Drawings",
        url: "https://www.nj.gov/transportation/eng/CADD/v8/stdconsdtls.shtml",
        tooltip: "New Jersey standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.nj.gov&sz=64",
      },
    ],
  },
  {
    state: "New Mexico",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.dot.nm.gov/infrastructure/plans-specifications-estimates-pse-bureau/standards/",
        tooltip: "New Mexico standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.nm.gov&sz=64",
      },
    ],
  },
  {
    state: "New York",
    links: [
      {
        label: "Standard Sheets and Bridge Detail Sheets",
        url: "https://www.dot.ny.gov/main/business-center/engineering/cadd-info/drawings",
        tooltip: "New York standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.ny.gov&sz=64",
      },
    ],
  },
  {
    state: "North Carolina",
    links: [
      {
        label: "Roadway Standard Drawings",
        url: "https://connect.ncdot.gov/resources/Specifications/Pages/2024-Roadway-Standard-Drawings.aspx",
        tooltip: "North Carolina standards available",
        logo: "https://www.google.com/s2/favicons?domain=connect.ncdot.gov&sz=64",
      },
    ],
  },
  {
    state: "North Dakota",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.dot.nd.gov/construction-and-planning/construction-planning/research/cadd-standards/standard-drawings",
        tooltip: "North Dakota standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.nd.gov&sz=64",
      },
    ],
  },
  {
    state: "Ohio",
    links: [
      {
        label: "Standard Construction Drawings",
        url: "https://www.transportation.ohio.gov/working/publications/all-publications",
        tooltip: "Ohio standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.transportation.ohio.gov&sz=64",
      },
    ],
  },
  {
    state: "Oklahoma",
    links: [
      {
        label: "Design Standards and Specifications Drawings",
        url: "https://www.odot.org/cnstrctengr.htm",
        tooltip: "Oklahoma standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=www.odot.org&sz=64",
      },
    ],
  },
  {
    state: "Oregon",
    links: [
      {
        label: "Standard Drawings and Details",
        url: "https://www.oregon.gov/odot/engineering/pages/standards.aspx",
        tooltip: "Oregon standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.oregon.gov&sz=64",
      },
    ],
  },
  {
    state: "Pennsylvania",
    links: [
      {
        label: "Roadway Construction Standards",
        url: "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/pubsforms/publications/pub-72m/72m_2010.pdf",
        tooltip: "Pennsylvania standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.pa.gov&sz=64",
      },
      {
        label: "Bridge Standard Drawings",
        url: "https://www.pa.gov/agencies/penndot/programs-and-doing-business/bridges/bridge-plans-standards-and-specifications.html",
        tooltip: "Other Pennsylvania standards",
        logo: "https://www.google.com/s2/favicons?domain=www.pa.gov&sz=64",
      },
    ],
  },
  {
    state: "Puerto Rico",
    links: [
      {
        label: "Planos Modelo",
        url: "https://act.dtop.pr.gov/planos-modelo/",
        tooltip: "Puerto Rico standards available",
        logo: "https://www.google.com/s2/favicons?domain=act.dtop.pr.gov&sz=64",
      },
    ],
  },
  {
    state: "Rhode Island",
    links: [
      {
        label: "Standard Details Drawings",
        url: "http://www.dot.ri.gov/business/contractorsandconsultants.php",
        tooltip: "Rhode Island standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.ri.gov&sz=64",
      },
    ],
  },
  {
    state: "South Carolina",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.scdot.org/business/standard-drawings.aspx",
        tooltip: "South Carolina standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=www.scdot.org&sz=64",
      },
    ],
  },
  {
    state: "South Dakota",
    links: [
      {
        label: "Standard Plates",
        url: "https://dot.sd.gov/doing-business/engineering/design-services/standard-plates",
        tooltip: "South Dakota standards available",
        logo: "https://www.google.com/s2/favicons?domain=dot.sd.gov&sz=64",
      },
    ],
  },
  {
    state: "Tennessee",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.tn.gov/tdot/state-engineering-technical-training/production-support/standard-drawings-library/standard-roadway-drawings.html",
        tooltip: "Tennessee standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.tn.gov&sz=64",
      },
    ],
  },
  {
    state: "Texas",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.dot.state.tx.us/business/standardplanfiles.htm",
        tooltip: "Texas standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.state.tx.us&sz=64",
      },
    ],
  },
  {
    state: "Utah",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.udot.utah.gov/connect/business/standards/",
        tooltip: "Utah standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.udot.utah.gov&sz=64",
      },
    ],
  },
  {
    state: "Vermont",
    links: [
      {
        label: "Standard Drawings",
        url: "https://vtrans.vermont.gov/cadd/downloads/standard-drawings",
        tooltip: "Vermont standards available",
        logo: "https://www.google.com/s2/favicons?domain=vtrans.vermont.gov&sz=64",
      },
    ],
  },
  {
    state: "Virginia",
    links: [
      {
        label: "Road and Bridge Standards",
        url: "https://www.vdot.virginia.gov/doing-business/technical-guidance-and-support/technical-guidance-documents/road-and-bridge-standards/",
        tooltip: "Virginia standards available",
        logo: "https://www.google.com/s2/favicons?domain=www.vdot.virginia.gov&sz=64",
      },
    ],
  },
  {
    state: "Washington",
    links: [
      {
        label: "Standard Plans",
        url: "https://wsdot.wa.gov/engineering-standards/all-manuals-and-standards/standard-plans",
        tooltip: "Washington standards available",
        logo: "https://www.google.com/s2/favicons?domain=wsdot.wa.gov&sz=64",
      },
    ],
  },
  {
    state: "West Virginia",
    links: [
      {
        label: "Standard Details Book",
        url: "https://transportation.wv.gov/highways/engineering/Pages/Details.aspx",
        tooltip: "West Virginia standards available",
        logo: "https://www.google.com/s2/favicons?domain=transportation.wv.gov&sz=64",
      },
    ],
  },
  {
    state: "Wisconsin",
    links: [
      {
        label: "Standard Detail Drawings",
        url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/rdwy/sdd.aspx",
        tooltip: "Wisconsin standards available",
        logo: "https://www.google.com/s2/favicons?domain=wisconsindot.gov&sz=64",
      },
      {
        label: "Bridge Manual Standard Drawings",
        url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/strct/bridge-manual-standards.aspx",
        tooltip: "Other Wisconsin standards",
        logo: "https://www.google.com/s2/favicons?domain=wisconsindot.gov&sz=64",
      },
    ],
  },
  {
    state: "Wyoming",
    links: [
      {
        label: "Standard Plans",
        url: "http://www.dot.state.wy.us/home/engineering_technical_programs/manuals_publications/standardplans.html",
        tooltip: "Wyoming standards available (opens in a new window)",
        logo: "https://www.google.com/s2/favicons?domain=www.dot.state.wy.us&sz=64",
      },
    ],
  },
  {
    state: "FLH Divisions (FHWA)",
    links: [
      {
        label: "Standard Drawings",
        url: "https://highways.dot.gov/federal-lands/std-drawings",
        tooltip: "FLH Divisions (FHWA) standards available",
        logo: "https://www.google.com/s2/favicons?domain=highways.dot.gov&sz=64",
      },
    ],
  },
];
