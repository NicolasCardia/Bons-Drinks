import React from 'react';
import './styles.css';

export default function Loading() {

    return (
        <div class="screen-main">
            <p class="p-loading" >Loading</p>

            <div class="sk-folding-cube">
              <div class="sk-cube1 sk-cube"></div>
              <div class="sk-cube2 sk-cube"></div>
              <div class="sk-cube4 sk-cube"></div>
              <div class="sk-cube3 sk-cube"></div>
            </div>
        </div>
    )
}


