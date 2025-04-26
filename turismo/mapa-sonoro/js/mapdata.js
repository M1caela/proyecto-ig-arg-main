var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "black",
    state_description: "",
    state_color: "white",
    state_hover_color: "",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    popups: "detect",  // al dejar detect aca y on_click en locations, los popup de provincias son automaticos y los de puntos de audio son manuales //
    
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "blue",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: "20",
    location_type: "circle",
    location_image_source: "",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",


    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },

  state_specific: {
    ARA: {
      name: "Salta",
      hover_color: "#E9D0AE"
    },
    ARB: {
      name: "Buenos Aires",
      hover_color: "#C6A8CD"
    },
    ARC: {
      name: "Ciudad de Buenos Aires",
      hover_color: "#637FA8"
    },
    ARD: {
      name: "San Luis",
      hover_color: "#AAA2D7"
    },
    ARE: {
      name: "Entre Ríos",
      hover_color: "#F6C3C4"
    },
    ARF: {
      name: "La Rioja",
      hover_color: "#A3C9BD"
    },
    ARG: {
      name: "Santiago del Estero",
      hover_color: "#D4DEA8"
    },
    ARH: {
      name: "Chaco",
      hover_color: "#CEBCAA"
    },
    ARJ: {
      name: "San Juan",
      hover_color: "#B8A3B4"
    },
    ARK: {
      name: "Catamarca",
      hover_color: "#BBD7B9"
    },
    ARL: {
      name: "La Pampa",
      hover_color: "#AFCEE8"
    },
    ARM: {
      name: "Mendoza",
      hover_color: "#966DAD"
    },
    ARN: {
      name: "Misiones",
      hover_color: "#D6A495"
    },
    ARP: {
      name: "Formosa",
      hover_color: "#D3A9BB"
    },
    ARQ: {
      name: "Neuquén",
      hover_color: "#A4C9C0"
    },
    ARR: {
      name: "Río Negro",
      hover_color: "#90C0DE"
    },
    ARS: {
      name: "Santa Fe",
      hover_color: "#E4B28E"
    },
    ART: {
      name: "Tucumán",
      hover_color: "#E4B28E"
    },
    ARU: {
      name: "Chubut",
      hover_color: "#F1DAAE"
    },
    ARV: {
      name: "Tierra del Fuego",
      hover_color: "#B2AED7"
    },
    ARW: {
      name: "Corrientes",
      hover_color: "#DFB1D7"
    },
    ARX: {
      name: "Córdoba",
      hover_color: "#BABC96"
    },
    ARY: {
      name: "Jujuy",
      hover_color: "#CBC2D7"
    },
    ARZ: {
      name: "Santa Cruz",
      hover_color: "#97D0B1"
    }
  },



  locations: {
    "0": {
      lat: "-42.06192145656334",
      lng: "-71.60873390171793",
      name: "Afilador de cuchillos",
      description:
        `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Neuquén</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audio/afilador-neuquen.wav" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "orange",
      popup: "on_click",
    },

    "1": {
      lat: "-42.06192145656334",
      lng: "-71.60873390171793",
      name: "Bandurrias",
      description:
        `<div class="p-4 bg-orange-50 rounded-lg id="tooltip-neuquen">
          <h3 class="text-lg font-bold mb-2">Lago Puelo</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/bandurrias-lago-puelo.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "green",
      popup: "on_click",
      type: "square"
    },

    "2": {
      lat: "-37.25996997245717",
      lng: "-56.97551614657866",
      name: "Playa",
      color: "blue",
      description:
      `<div class="p-4 bg-orange-50 rounded-lg">
      <h3 class="text-lg font-bold mb-2">Villa Gessel</h3>
      <audio 
        controls 
        class="w-full mt-2 rounded-lg"
        style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
        <source 
          src="audios/buenos-aires-villa-gesel-playa.mp3" 
          type="audio/mpeg">
        Tu navegador no soporta audio HTML5
      </audio>
    </div>`,
       popup: "on_click",
    },

    "3": {
      lat: "-34.60745745966817",
      lng: "-58.374534628837644",
      name: "Subte D",
      description:
      `<div class="p-4 bg-orange-50 rounded-lg">
      <h3 class="text-lg font-bold mb-2">Capital Federal</h3>
      <audio 
        controls 
        class="w-full mt-2 rounded-lg"
        style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
        <source 
          src="audios/caba-subte-linea-d.mp3" 
          type="audio/mpeg">
        Tu navegador no soporta audio HTML5
      </audio>
    </div>`,
      color: "orange",
      popup: "on_click",
    },

    "4": {
      name: "Caballos comiendo",
      description: 
      `<div class="p-4 bg-orange-50 rounded-lg">
      <h3 class="text-lg font-bold mb-2">El Bolsón</h3>
      <audio 
        controls 
        class="w-full mt-2 rounded-lg"
        style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
        <source 
          src="audios/caballos_comiendo_el_bolson.mp3" 
          type="audio/mpeg">
        Tu navegador no soporta audio HTML5
      </audio>
    </div>`,
      lng: "-71.52138500000005",
      color: "green",
      lat: "-41.97267149367572",
      popup: "on_click",
      type: "square"
    },

    "5": {
      name: "Camping El Maitén",
      description: 
      `<div class="p-4 bg-orange-50 rounded-lg">
      <h3 class="text-lg font-bold mb-2">Río Negro</h3>
      <audio 
        controls 
        class="w-full mt-2 rounded-lg"
        style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
        <source 
          src="audios/camping_maiten_rio_negro.mp3" 
          type="audio/mpeg">
        Tu navegador no soporta audio HTML5
      </audio>
    </div>`,
      color: "orange",
      lat: "-41.592199168062315",
      lng: "-71.75916207453336",
      popup: "on_click",
    },

    "6": {
      name: "Cañadón",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Chubut</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/canadon_chubut.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "blue",
      lat: "-45.65052040766693",
      lng: "-67.62058481051065",
      popup: "on_click",
    },

    "7": {
      name: "Dique El Jumeal",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">San Fernando del Valle de Catamarca</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/san-fernando-del-valle-de-catamarca-dique-el-jumeal.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "blue",
      lat: "-28.456459454707026",
      lng: "-65.80920728867783",
      popup: "on_click",
    },

    "9": {
      name: "Colibríes",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Los Laguitos</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/colibries_los_laguitos.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "green",
      lat: "-41.77136454312768",
      lng: "-71.72730057452326",
      popup: "on_click",
      type: "square"
    },

    "10": {
      name: "Conmemoración al Gauchito Gil",
      color: "orange",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Mercedes</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/corrientes-mercedes-conmemoracion-gauchito-gil.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      lat: "-29.18433646800446",
      lng: "-58.077441638096076",
      popup: "on_click",
    },

    "11": {
      name: "Desemboque del Rió Epuyen",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Lago Puelo</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/desemboque__rio_epuyen.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "blue",
      popup: "on_click",
      lat: "-42.101366515419905",
      lng: " -71.45515108334693"
    },

    "12": {
      name: "Puerto Formosa",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Formosa</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/formosa-puerto-formosa.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "blue",
      popup: "on_click",
      lat: "-26.181328915624707",
      lng: "-58.16218671575612"
    },

    "13": {
      name: "Hinchada de Fútbol",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Bahía Blanca</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/hinchada_de_futbol_bahia_blanca.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "orange",
      popup: "on_click",
      lat: "-38.67931599119548",
      lng: "-62.22397409274401"
    },

    "14": { 
      name: "La Saladita",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Río Quemquemtreu</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/saladita_san_jose.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "orange",
      popup: "on_click",
      lat: "-38.95188616135663",
      lng: "-68.06390590639303"
    },

    "15": {
      name: "Parque de las juventudes",
      color: "orange",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">La Rioja</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/la-rioja-parque-de-las-juventudes.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
        popup: "on_click",
      lat: "-29.42873694161048",
      lng: " -66.86443296165069"
    },

    "17": {
      name: "Parque Nacional Iguazú",
      color: "orange",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Misiones</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/misiones-parque-nacional-iguazu.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      lat: "-25.68275414111277",
      lng: "-54.45455882625491",
      popup: "on_click",
    },

    "18": {
      name: "Oración a la bandera",
      description:
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Buenos Aires</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/oracion_a_la_bandera_bahia.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "orange",
      popup: "on_click",
      lat: "-36.96211815550293",
      lng: "-59.77604392359922"
    },

    "19": {
      name: "Perito Moreno",
      color: "green",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Santa Cruz</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/perito_moreno.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
        popup: "on_click",
      lat: "-46.59110488746542",
      lng: "-70.92789590475755",
      type: "square"
    },

    "20": {
      name: "Partido de fútbol",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Buenos Aires</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/personas_jugando_al_futbol.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "orange",
      popup: "on_click",
      lat: "-34.58244871913193",
      lng: " -58.57955769246438"
    },

    "21": {
      name: "Portal del Río Motoco",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Río Negro</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/rio_motoco_rio_negro.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "blue",
      lat: "-41.97545987223488",
      lng: "-71.7073878168401",
      popup: "on_click",
    },

    "22": {
      name: "Puente de los aplausos",
      color: "blue",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Corcovado</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/puente de los aplausos_quemquemtreu.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
        popup: "on_click",
      lat: "-43.54337715791161",
      lng: " -71.48735013209244"
    },

    "23": {
      name: "Río blanco",
      description:
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Jujuy</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/rio_blanco.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "blue",
      popup: "on_click",
      lat: "-24.22561434660955",
      lng: "-65.23619139630763"
    },

    "24": {
      name: "Río San Lorenzo",
      color: "blue",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Salta</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/salta-rio-san-lorenzo.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
        popup: "on_click",
      lat: "-24.813687826650135",
      lng: "-65.40013263304377"
    },

    "25": {
      name: "Campanas de la Parroquia San Carlos",
      color: "orange",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Sunchales</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/sunchales-parroquia-san-carlos-borromeo.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
        popup: "on_click",
      lat: "-30.94363136296227",
      lng: "-61.560567723006635"
    },

    "26": { 
      name: "Café bar en Ushuaia",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Tierra del Fuego</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/tierra-del-fuego-ushuaia-bar-cafe.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "orange",
      lat: "-54.80248189059729",
      lng: "-68.3065824461191",
      popup: "on_click",
    },

    "27": {
      name: "Ciudad sagrada de los Quilmes",
      description: 
         `<div class="p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Tafí del Valle</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/tucuman-tafi-del-valle-ciudad-sagrada-de-los-quilmes.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
      color: "orange",
      popup: "on_click",
      lat: "-26.46516927783299",
      lng: "-66.03674168875926"
    },

    "28": {
      name: "Vendedor ambulante",
      color: "orange",
      description: 
         `<div class="etiqueta p-4 bg-orange-50 rounded-lg">
          <h3 class="text-lg font-bold mb-2">Bahia Blanca</h3>
          <audio 
            controls 
            class="w-full mt-2 rounded-lg"
            style="box-shadow: 0 2px 4px rgba(0,0,0,0.1)">
            <source 
              src="audios/verdulero_ambulante_bahia_blanca.mp3" 
              type="audio/mpeg">
            Tu navegador no soporta audio HTML5
          </audio>
        </div>`,
        popup: "on_click",
      lat: "-38.704323449791175",
      lng: "-62.27010889009599"
    }
  },

  labels: {
    ARA: {
      name: "Salta",
      parent_id: "SAL"
    },
    ARB: {
      name: "Buenos Aires",
      parent_id: "BS"
    },
    ARC: {
      name: "Ciudad de Buenos Aires",
      parent_id: "CABA"
    },
    ARD: {
      name: "San Luis",
      parent_id: "SL"
    },
    ARE: {
      name: "Entre Ríos",
      parent_id: "ER"
    },
    ARF: {
      name: "La Rioja",
      parent_id: "LR"
    },
    ARG: {
      name: "Santiago del Estero",
      parent_id: "SDE"
    },
    ARH: {
      name: "Chaco",
      parent_id: "CHA"
    },
    ARJ: {
      name: "San Juan",
      parent_id: "SJ"
    },
    ARK: {
      name: "Catamarca",
      parent_id: "CAT"
    },
    ARL: {
      name: "La Pampa",
      parent_id: "LP"
    },
    ARM: {
      name: "Mendoza",
      parent_id: "MDZ"
    },
    ARN: {
      name: "Misiones",
      parent_id: "MIS"
    },
    ARP: {
      name: "Formosa",
      parent_id: "FOR"
    },
    ARQ: {
      name: "Neuquén",
      parent_id: "NQN"
    },
    ARR: {
      name: "Río Negro",
      parent_id: "RN"
    },
    ARS: {
      name: "Santa Fe",
      parent_id: "SF"
    },
    ART: {
      name: "Tucumán",
      parent_id: "TUC"
    },
    ARU: {
      name: "Chubut",
      parent_id: "CHU"
    },
    ARV: {
      name: "Tierra del Fuego",
      parent_id: "TDF"
    },
    ARW: {
      name: "Corrientes",
      parent_id: "COR"
    },
    ARX: {
      name: "Córdoba",
      parent_id: "CDB"
    },
    ARY: {
      name: "Jujuy",
      parent_id: "JU"
    },
    ARZ: {
      name: "Santa Cruz",
      parent_id: "SC"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};

