import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import {
  IoLocationSharp,
  IoCall,
  IoNavigateSharp,
  IoCarSharp,
  IoMapOutline,
  IoEyeOffOutline,
} from 'react-icons/io5';
import PropTypes from 'prop-types';

import './carte.scss';

export default function Carte({
  onclickCloseModal, open,
}) {
  return (
    <div className="carte">
      <MapContainer
        id="mapid"
        center={[50.603329, 3.15667]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy;
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {open && (
          <Marker
            position={[50.533329, 3.16667]}
          >
            <Popup>
              C'est dans cette ville <br /> que vous pouvez me trouver.
            </Popup>
          </Marker>
        )}
      </MapContainer>
      {!open && (
        <div className="carte__modal">
          <div className="carte__modal__title titleDiv">
            <p className="carte__modal__title__ou">Où suis-je ?</p>
            <h1 className="carte__modal__title__adresse">Mon adresse</h1>
          </div>
          <div className="carte__modal__left leftDiv">
            <div className="carte__modal__left__adresse">
              <IoLocationSharp className="carte__modal__left__adresse__logo" />
              <p className="carte__modal__left__adresse__text">59242 Templeuve-en-Pévèle</p>
            </div>
            <div className="carte__modal__left__phone">
              <IoCall className="carte__modal__left__phone__logo" />
              <p className="carte__modal__left__phone__text">06 86 67 23 76</p>
            </div>
          </div>
          <div className="carte__modal__right rightDiv">
            <div className="carte__modal__right__ville">
              <IoNavigateSharp className="carte__modal__right__ville__logo" />
              <p className="carte__modal__right__ville__text">Métropole Lilloise</p>
            </div>
            <div className="carte__modal__right__permis">
              <IoCarSharp className="carte__modal__right__permis__logo" />
              <p className="carte__modal__right__permis__text">Permis B</p>
            </div>
          </div>
          <div className="carte__modal__bouton boutonDiv">
            <button
              type="button"
              className="carte__modal__bouton__click"
              onClick={onclickCloseModal}
            >
              <IoMapOutline className="carte__modal__bouton__click__logo" />
              VOIR LOCALISATION
            </button>
          </div>
        </div>
      )}
      {open && (
        <div className="carte__masquer">
          <IoEyeOffOutline className="carte__masquer__logo" />
          <button
            type="button"
            className="carte__masquer__text"
            onClick={onclickCloseModal}
          >
            MASQUER LOCALISATION
          </button>
        </div>
      )}
    </div>
  );
}

Carte.propTypes = {
  onclickCloseModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
