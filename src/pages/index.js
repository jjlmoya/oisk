import React from "react"

import MainLayout from "../layout/main"
import Logo from "../atoms/logo"
import SEO from "../organisms/seo"
import "../assets/style.css"

const IndexPage = () => (
    <MainLayout>
        <SEO title="Home"/>
        <section class="l-grid-column--full
                        l-flex l-flex--align-center l-flex--direction-column
                        a-pad--top-40 l-column--1-1">
            <div class="l-position">
                <h1 class="a-text  a-text--m  og-banner-screen__claim a-text--center a-text--uppercase a-text--bold l-position--absolute">
                    En 2 Pasos
                </h1>
                <Logo src={"logo.jpg"}/>
            </div>
        </section>
        <section class="l-grid-column--full bs_step a-pad--x-40">
            <picture class=" a-image-logo--content a-pad-0">
                <img class="a-image a-image-logo--content__image a-mar-auto" src="/images/mv.jpg"/>
            </picture>
            <h2 class="a-text a-text--xl  a-text--bold a-text--m">Tu viaje en 2 pasos</h2>
            <h3 class="a-text  a-text--secondary"> Motivo:</h3>
            <div class="l-flex l-flex--justify-center a-pad l-flex--wrap bs_step_category"></div>
        </section>
    </MainLayout>
);

export default IndexPage;
