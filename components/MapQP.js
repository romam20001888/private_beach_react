import React, { useState } from "react";
import { YMaps, Map, Polygon, Placemark } from "react-yandex-maps";



const defMap = {
  center: [47.289134, 39.664447],
  zoom: 18
};

const draw = ref => {
  ref.editor.startDrawing();

  ref.editor.events.add("statechange", event => {
    console.log(event);
  });
};

export default function MapQP() {
  const [ymapsasd,setymapsasd]=useState();
  return (
    <div className="mapQP">
      
      <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
          <Map defaultState={defMap}width="100%"height="100%">
            <Placemark
                properties={{
                  balloonContentBody: "<div style='' >QP KUPIBAS</div><div style='color:#454545'>ул. Особенная 116</div>"
                }}
              options={{
                iconLayout: "default#image",
                iconImageHref:"/mark.png",
                iconImageSize: [42, 46]
              }}
             geometry={[47.289134, 39.664447]} 
             />
            <Polygon
              onLoad={ymaps => setymapsasd(ymaps)}
              options={{
                fillColor: "#00FF00",
                strokeColor: "#0000FF",
                opacity: 0,
                strokeWidth: 5
              }}
        
            />
          </Map>
        </YMaps>
    </div>
  );
}

