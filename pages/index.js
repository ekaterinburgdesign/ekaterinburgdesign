import { getNotionDatabaseItems } from '../core/notion'

import Head from 'next/head'
import Image from 'next/image'

import menuItems from '../routes.json';

import Layout from '../components/Layout'
import PostPreviewGrid from '../components/PostPreviewGrid'
import TeamList from '../components/TeamGrid';
import Contacts from '../components/Contacts';
import Partners from '../components/Partners/Partners';

export default function Home({ projects, team, partners }) {
  return (
    <>
      <div id="about"></div>
      <Layout home menuItems={menuItems}>
        <Head>
          <title>Дизайн-код Екатеринбурга</title>
        </Head>

        <section className={'section'}>
          <p className={'site-description site-description_align-left'}>
            &laquo;Дизайн-код Екатеринбурга&raquo;&nbsp;&mdash; инициативный проект независимых дизайнеров города. Мы&nbsp;разрабатыва&shy;ем единые визуальные стандарты городской среды и&nbsp;внедряем их&nbsp;в&nbsp;жизнь.
          </p>
          <p className={'site-description site-description_align-right'}>
            Наша цель&nbsp;&mdash; сделать Екатеринбург уютным и&nbsp;комфортным, чтобы жите&shy;лям хотелось остаться, а&nbsp;гостям&raquo;&nbsp;&mdash;&nbsp;вернуться.
          </p>
        </section>

        <section className={'section'} id="projects">
          <h2 className={'section-heading section-heading_projects'}>Проекты</h2>
          <PostPreviewGrid posts={projects} />

          <div className={'iset'}>
            <svg
              className="iset__heading"
              xmlns="http://www.w3.org/2000/svg"
              width="2064"
              height="809"
              fill="none"
              viewBox="0 0 2064 809"
            >
              <path fill="#BF0000" fillOpacity="0.6" d="M341.48 568.102h-3.98l-.416 3.958h3.98l.416-3.958zm92.5 0l-.416 3.958h3.98l.416-3.958h-3.98zm45.731-435.104h3.98l.416-3.958h-3.98l-.416 3.958zm-84.375 0l.416-3.958h-2.237l-1.362 1.9 3.183 2.058zm-200.649 279.71l-.416 3.958h2.237l1.362-1.9-3.183-2.058zm-1.875 0h-3.98l-.416 3.958h3.98l.416-3.958zm29.399-279.71h3.98l.416-3.958h-3.98l-.416 3.958zm-92.5 0l.416-3.958h-3.98l-.416 3.958h3.98zM83.98 568.102H80l-.416 3.958h3.98l.416-3.958zm84.375 0l-.416 3.958h2.236l1.363-1.9-3.183-2.058zm200.648-279.71l.416-3.958h-2.236l-1.363 1.9 3.183 2.058zm1.875 0h3.98l.416-3.958h-3.98l-.416 3.958zM341.064 572.06h92.5l.832-7.917h-92.5l-.832 7.917zm96.896-3.958l45.731-435.104h-7.96L430 568.102h7.96zm42.167-439.062h-84.375l-.832 7.916h84.375l.832-7.916zm-87.974 1.9L191.504 410.649l6.366 4.117 200.649-279.709-6.366-4.117zm-197.05 277.809h-1.875l-.832 7.917h1.875l.832-7.917zm1.689 3.959l29.399-279.71h-7.96l-29.399 279.71h7.96zm25.835-283.668h-92.5l-.832 7.916h92.5l.832-7.916zm-96.896 3.958L80 568.102h7.96l45.731-435.104h-7.96zM83.564 572.06h84.375l.832-7.917H84.396l-.832 7.917zm87.974-1.9l200.648-279.709-6.366-4.117-200.648 279.709 6.366 4.117zm197.049-277.81h1.875l.832-7.916h-1.875l-.832 7.916zm-1.689-3.958L337.5 568.102h7.96l29.398-279.71h-7.96zm499.73-133.639l3.388 1.747 2.143-3.573-3.421-1.736-2.11 3.562zm-33.07 385.999l1.614 3.437 3.51-1.883-1.397-3.371-3.727 1.817zm-30.91-74.589l3.727-1.817-1.517-3.659-3.815 2.035 1.605 3.441zm18.51-235.577l-2.12 3.556 3.384 1.733 2.124-3.542-3.388-1.747zm47.58-79.395c-38.484-19.527-76.273-28.367-120.629-28.367l-.832 7.917c43.144 0 79.776 8.564 117.242 27.575l4.219-7.125zm-120.629-28.367c-68.236 0-118.603 24.056-153.54 64.996-34.765 40.74-53.785 97.659-60.625 162.73h7.96c6.75-64.217 25.426-119.182 58.554-158.004 32.958-38.621 80.68-61.805 146.819-61.805l.832-7.917zM533.944 350.55c-6.839 65.071.217 121.99 26.418 162.73 26.331 40.94 71.641 64.996 139.877 64.996l.832-7.917c-66.138 0-108.988-23.184-133.826-61.805-24.968-38.822-32.09-93.787-25.341-158.004h-7.96zm166.295 227.726c48.174 0 92.551-11.359 134.933-34.087l-3.227-6.873c-41.072 22.025-84.047 33.043-130.874 33.043l-.832 7.917zm137.046-39.341l-30.91-74.589-7.454 3.634 30.91 74.589 7.454-3.634zm-36.242-76.213c-28.568 15.238-57.473 23.103-86.087 23.103l-.832 7.916c30.137 0 60.43-8.296 90.128-24.136l-3.209-6.883zm-86.087 23.103c-27.62 0-48.827-12.919-62.198-36.176-13.444-23.386-18.993-57.34-14.604-99.099h-7.96c-4.496 42.775 1.077 78.438 15.505 103.534 14.503 25.227 37.921 39.657 68.425 39.657l.832-7.916zM638.154 350.55c4.389-41.76 17.075-75.709 35.509-99.092 18.328-23.25 42.406-36.183 70.354-36.183l.832-7.916c-30.802 0-57.41 14.416-77.303 39.649-19.787 25.1-32.856 60.767-37.352 103.542h7.96zm105.863-135.275c26.191 0 49.962 6.042 75.021 18.867l4.24-7.113c-25.947-13.28-50.869-19.67-78.429-19.67l-.832 7.916zm80.529 17.058l45.47-75.833-6.775-3.493-45.471 75.832 6.776 3.494zm337.914 335.769l-.41 3.958h3.97l.42-3.958h-3.98zm8.89-84.535h3.98l.41-3.958h-3.98l-.41 3.958zm-173.754 0h-3.98l-.416 3.958h3.98l.416-3.958zm10.324-98.209l.41-3.958h-3.98l-.41 3.958h3.98zm142.5 0l-.42 3.958h3.98l.42-3.958h-3.98zm8.88-84.534h3.98l.42-3.958h-3.98l-.42 3.958zm-142.5 0h-3.98l-.41 3.958h3.98l.41-3.958zm8.76-83.291l.41-3.959h-3.98l-.41 3.959h3.98zm161.25 0l-.42 3.958h3.44l.85-3.382-3.87-.576zm21.38-84.535l3.88.576 1.15-4.534h-4.61l-.42 3.958zm-259.998 0l.416-3.958h-3.98l-.416 3.958h3.98zm-45.731 435.104h-3.98l-.416 3.958h3.98l.416-3.958zm263.979 0l8.89-84.535h-7.96l-8.89 84.535h7.96zm5.32-88.493H998.012l-.832 7.916h173.75l.83-7.916zm-170.18 3.958l10.32-98.209h-7.96l-10.324 98.209h7.964zm5.92-94.251H1150l.83-7.916h-142.5l-.83 7.916zm146.9-3.958l8.88-84.534h-7.96l-8.88 84.534h7.96zm5.32-88.492h-142.5l-.83 7.916h142.5l.83-7.916zm-138.94 3.958l8.76-83.291h-7.96l-8.76 83.291h7.96zm4.36-79.333h161.25l.83-7.917h-161.25l-.83 7.917zm165.54-3.382l21.39-84.535-7.75-1.152-21.39 84.535 7.75 1.152zm17.93-89.069H948.608l-.832 7.916h260.004l.83-7.916zm-264.398 3.958l-45.731 435.104h7.96l45.731-435.104h-7.96zM902.045 572.06h260.005l.83-7.917H902.877l-.832 7.917zm668.925-354.527l-.41 3.958h3.43l.86-3.382-3.88-.576zm21.39-84.535l3.87.576 1.15-4.534h-4.61l-.41 3.958zm-340.63 0l.42-3.958h-3.98l-.42 3.958h3.98zm-8.88 84.535h-3.98l-.42 3.958h3.98l.42-3.958zm123.75 0h3.98l.41-3.959h-3.98l-.41 3.959zm-36.85 350.569h-3.98l-.41 3.958h3.98l.41-3.958zm92.5 0l-.41 3.958h3.98l.41-3.958h-3.98zm36.85-350.569l.41-3.959h-3.98l-.41 3.959h3.98zm115.75.576l21.38-84.535-7.75-1.152-21.38 84.535 7.75 1.152zm17.92-89.069h-340.62l-.83 7.916h340.62l.83-7.916zm-345.02 3.958l-8.88 84.535h7.96l8.88-84.535h-7.96zm-5.32 88.493h123.75l.83-7.917h-123.75l-.83 7.917zm120.19-3.958l-36.85 350.569h7.96l36.85-350.569h-7.96zm-33.28 354.527h92.5l.83-7.917h-92.5l-.83 7.917zm96.89-3.958l36.85-350.569h-7.96l-36.85 350.569h7.96zm32.45-346.611h111.88l.83-7.917h-111.88l-.83 7.917zm265.19 78.09h-3.98l-.42 3.958h3.98l.42-3.958zm17.51-166.583h3.98l.41-3.958h-3.98l-.41 3.958zm-92.5 0l.41-3.958h-3.98l-.41 3.958h3.98zm-45.74 435.104h-3.98l-.41 3.958h3.98l.41-3.958zm101.39-84.535h-3.98l-.42 3.958h3.98l.42-3.958zm10.58-100.695l.42-3.958h-3.98l-.42 3.958h3.98zm12.74-83.291l17.51-166.583h-7.96l-17.51 166.583h7.96zm13.94-170.541h-92.5l-.83 7.916h92.5l.83-7.916zm-96.89 3.958l-45.74 435.104h7.96l45.74-435.104h-7.96zm-42.17 439.062h151.25l.83-7.917h-151.25l-.83 7.917zm151.25 0c46.23 0 86.29-11.493 116.08-34.748 29.89-23.335 48.91-58.084 53.68-103.471h-7.96c-4.58 43.499-22.62 75.88-50.26 97.454-27.74 21.654-65.7 32.848-110.71 32.848l-.83 7.917zm169.76-138.219c4.77-45.4-7.1-80.146-32.17-103.474-24.97-23.249-62.61-34.744-108.54-34.744l-.83 7.916c44.7 0 80.3 11.192 103.58 32.852 23.18 21.58 34.57 53.964 30 97.45h7.96zm-140.71-138.218h-58.75l-.83 7.916h58.75l.83-7.916zm-13.96 91.207c20.96 0 34.47 5.135 42.41 13.173 7.89 7.995 10.81 19.398 9.36 33.217h7.96c1.62-15.396-1.57-29.167-11.32-39.042-9.71-9.833-25.41-15.264-47.58-15.264l-.83 7.916zm51.77 46.39c-1.34 12.796-6.77 24.264-16.47 32.551-9.71 8.298-24.21 13.838-44.42 13.838l-.84 7.916c21.66 0 38.37-5.958 50.12-15.997 11.76-10.05 18.04-23.755 19.57-38.308h-7.96zm-60.89 46.389h-55l-.84 7.916h55l.84-7.916zm-51.44 3.958l10.58-100.695h-7.96l-10.58 100.695h7.96zm6.19-96.737h54.37l.83-7.916h-54.37l-.83 7.916z"></path>
              <path fill="#00BFBF" fillOpacity="0.6" d="M329.158 608.457h-3.98l-.416 3.958h3.98l.416-3.958zm92.5 0l-.416 3.958h3.98l.416-3.958h-3.98zm45.731-435.104h3.98l.416-3.958h-3.98l-.416 3.958zm-84.375 0l.416-3.958h-2.236l-1.363 1.9 3.183 2.058zm-200.649 279.71l-.416 3.958h2.237l1.362-1.9-3.183-2.058zm-1.875 0h-3.98l-.416 3.958h3.98l.416-3.958zm29.399-279.71h3.98l.416-3.958h-3.98l-.416 3.958zm-92.5 0l.416-3.958h-3.98l-.416 3.958h3.98zM71.658 608.457h-3.98l-.416 3.958h3.98l.416-3.958zm84.375 0l-.416 3.958h2.236l1.363-1.9-3.183-2.058zm200.648-279.71l.417-3.958h-2.237l-1.363 1.9 3.183 2.058zm1.875 0h3.98l.416-3.958h-3.979l-.417 3.958zm-29.814 283.668h92.5l.832-7.917h-92.5l-.832 7.917zm96.896-3.958l45.731-435.104h-7.96l-45.731 435.104h7.96zm42.167-439.062H383.43l-.832 7.916h84.375l.832-7.916zm-87.974 1.9L179.182 451.004l6.366 4.117 200.649-279.709-6.366-4.117zm-197.05 277.809h-1.875l-.832 7.917h1.875l.832-7.917zm1.689 3.959l29.399-279.71h-7.96l-29.399 279.71h7.96zm25.835-283.668h-92.5l-.832 7.916h92.5l.832-7.916zm-96.896 3.958L67.678 608.457h7.96l45.731-435.104h-7.96zM71.242 612.415h84.375l.832-7.917H72.074l-.832 7.917zm87.974-1.9l200.649-279.709-6.367-4.117L152.85 606.398l6.366 4.117zm197.049-277.81h1.875l.833-7.916h-1.875l-.833 7.916zm-1.688-3.958l-29.399 279.71h7.96l29.398-279.71h-7.959zm499.73-133.639l3.387 1.747 2.143-3.573-3.421-1.736-2.109 3.562zm-33.071 385.999l1.614 3.437 3.51-1.883-1.397-3.371-3.727 1.817zm-30.91-74.589l3.727-1.817-1.517-3.659-3.814 2.035 1.604 3.441zm18.51-235.577l-2.12 3.556 3.384 1.733 2.124-3.543-3.388-1.746zm47.58-79.395c-38.484-19.527-76.272-28.367-120.629-28.367l-.832 7.917c43.144 0 79.776 8.564 117.242 27.575l4.219-7.125zm-120.629-28.367c-68.236 0-118.603 24.056-153.539 64.996-34.766 40.74-53.786 97.659-60.625 162.73h7.959c6.75-64.217 25.426-119.182 58.555-158.004 32.957-38.621 80.68-61.805 146.818-61.805l.832-7.917zM521.623 390.905c-6.84 65.071.216 121.99 26.417 162.73 26.331 40.94 71.642 64.996 139.878 64.996l.832-7.917c-66.139 0-108.988-23.184-133.827-61.805-24.968-38.822-32.09-93.787-25.341-158.004h-7.959zm166.295 227.726c48.173 0 92.55-11.359 134.932-34.087l-3.227-6.873c-41.072 22.025-84.047 33.043-130.873 33.043l-.832 7.917zm137.045-39.341l-30.91-74.589-7.454 3.634 30.911 74.589 7.453-3.634zm-36.241-76.213c-28.568 15.238-57.474 23.103-86.087 23.103l-.832 7.916c30.136 0 60.429-8.296 90.128-24.136l-3.209-6.883zm-86.087 23.103c-27.621 0-48.828-12.919-62.198-36.176-13.445-23.386-18.994-57.34-14.604-99.099h-7.96c-4.496 42.775 1.076 78.438 15.504 103.534 14.503 25.227 37.921 39.657 68.426 39.657l.832-7.916zm-76.802-135.275c4.389-41.76 17.074-75.709 35.508-99.092 18.328-23.25 42.406-36.183 70.354-36.183l.833-7.916c-30.802 0-57.411 14.416-77.303 39.649-19.788 25.1-32.857 60.767-37.352 103.542h7.96zM731.695 255.63c26.191 0 49.962 6.042 75.021 18.867l4.241-7.113c-25.948-13.28-50.87-19.67-78.429-19.67l-.833 7.916zm80.529 17.057l45.47-75.832-6.775-3.493-45.471 75.832 6.776 3.493zm337.916 335.77l-.42 3.958h3.98l.42-3.958h-3.98zm8.88-84.535h3.98l.42-3.958h-3.98l-.42 3.958zm-173.746 0h-3.98l-.416 3.958h3.98l.416-3.958zm10.322-98.209l.416-3.958h-3.98l-.416 3.958h3.98zm142.504 0l-.42 3.958h3.98l.42-3.958h-3.98zm8.88-84.534h3.98l.42-3.958h-3.98l-.42 3.958zm-142.5 0h-3.98l-.41 3.958h3.98l.41-3.958zm8.76-83.291l.41-3.959h-3.98l-.41 3.959h3.98zm161.25 0l-.42 3.958h3.44l.85-3.383-3.87-.575zm21.38-84.535l3.88.576 1.14-4.534h-4.6l-.42 3.958zm-260 0l.416-3.958h-3.979l-.417 3.958h3.98zm-45.731 435.104h-3.98l-.416 3.958h3.98l.416-3.958zm263.981 0l8.88-84.535h-7.96l-8.88 84.535h7.96zm5.32-88.493H985.69l-.832 7.916h173.752l.83-7.916zm-170.186 3.958l10.322-98.209h-7.96l-10.322 98.209h7.96zm5.926-94.251h142.5l.83-7.916H996.012l-.832 7.916zm146.9-3.958l8.88-84.534H1143l-8.88 84.534h7.96zm5.32-88.492h-142.5l-.83 7.916h142.5l.83-7.916zm-138.94 3.958l8.76-83.291h-7.96l-8.76 83.291h7.96zm4.36-79.333h161.25l.83-7.917h-161.25l-.83 7.917zm165.54-3.383l21.39-84.534-7.76-1.152-21.38 84.535 7.75 1.151zm17.93-89.068H936.286l-.832 7.916h259.996l.84-7.916zm-264.4 3.958l-45.731 435.104h7.96l45.731-435.104h-7.96zm-42.167 439.062h259.997l.84-7.917H890.555l-.832 7.917zm668.927-354.527l-.42 3.958h3.44l.86-3.383-3.88-.575zm21.39-84.535l3.87.576 1.15-4.534h-4.61l-.41 3.958zm-340.63 0l.42-3.958h-3.98l-.42 3.958h3.98zm-8.88 84.535h-3.98l-.42 3.958h3.98l.42-3.958zm123.75 0h3.98l.41-3.959h-3.98l-.41 3.959zm-36.85 350.569h-3.98l-.42 3.958h3.98l.42-3.958zm92.5 0l-.42 3.958h3.98l.42-3.958h-3.98zm36.85-350.569l.41-3.959h-3.98l-.41 3.959h3.98zm115.75.575l21.38-84.534-7.75-1.152-21.39 84.535 7.76 1.151zm17.92-89.068h-340.62l-.84 7.916h340.63l.83-7.916zm-345.02 3.958l-8.88 84.535h7.96l8.88-84.535h-7.96zm-5.32 88.493h123.75l.83-7.917h-123.75l-.83 7.917zm120.19-3.958l-36.85 350.569h7.96l36.85-350.569h-7.96zm-33.29 354.527h92.5l.84-7.917h-92.5l-.84 7.917zm96.9-3.958l36.85-350.569h-7.96l-36.85 350.569h7.96zm32.45-346.611h111.87l.84-7.917h-111.88l-.83 7.917zm265.19 78.09h-3.98l-.42 3.958h3.98l.42-3.958zm17.5-166.583h3.98l.42-3.958h-3.98l-.42 3.958zm-92.5 0l.42-3.958h-3.98l-.42 3.958h3.98zm-45.73 435.104h-3.98l-.41 3.958h3.98l.41-3.958zm101.39-84.535h-3.98l-.42 3.958h3.98l.42-3.958zm10.58-100.695l.42-3.958h-3.98l-.42 3.958h3.98zm12.74-83.291l17.5-166.583h-7.96l-17.5 166.583h7.96zm13.94-170.541h-92.5l-.83 7.916h92.5l.83-7.916zm-96.9 3.958l-45.73 435.104h7.96l45.73-435.104h-7.96zm-42.16 439.062h151.25l.83-7.917h-151.25l-.83 7.917zm151.25 0c46.23 0 86.29-11.493 116.08-34.748 29.89-23.335 48.9-58.084 53.67-103.471h-7.96c-4.57 43.499-22.61 75.88-50.25 97.454-27.74 21.654-65.7 32.848-110.71 32.848l-.83 7.917zm169.75-138.219c4.78-45.4-7.1-80.146-32.16-103.474-24.98-23.249-62.61-34.745-108.54-34.745l-.83 7.917c44.7 0 80.3 11.192 103.57 32.852 23.19 21.58 34.57 53.964 30 97.45h7.96zm-140.7-138.219h-58.75l-.83 7.917h58.75l.83-7.917zm-13.96 91.208c20.96 0 34.46 5.135 42.41 13.173 7.89 7.995 10.81 19.398 9.36 33.217h7.96c1.62-15.396-1.57-29.167-11.32-39.043-9.72-9.832-25.41-15.263-47.58-15.263l-.83 7.916zm51.77 46.39c-1.35 12.796-6.77 24.264-16.47 32.551-9.71 8.297-24.21 13.838-44.43 13.838l-.83 7.916c21.66 0 38.37-5.958 50.12-15.997 11.76-10.05 18.04-23.755 19.57-38.308h-7.96zm-60.9 46.389h-55l-.83 7.916h55l.83-7.916zm-51.43 3.958l10.58-100.695h-7.96l-10.58 100.695h7.96zm6.19-96.737h54.37l.83-7.916h-54.37l-.83 7.916z"></path>
              <path fill="#F0F" fillOpacity="0.6" d="M362.798 590.229h-3.98l-.416 3.958h3.98l.416-3.958zm92.5 0l-.416 3.958h3.98l.416-3.958h-3.98zm45.731-435.103h3.98l.416-3.958h-3.98l-.416 3.958zm-84.375 0l.416-3.958h-2.236l-1.363 1.899 3.183 2.059zM216.006 434.835l-.416 3.958h2.236l1.363-1.899-3.183-2.059zm-1.875 0h-3.98l-.416 3.958h3.98l.416-3.958zm29.398-279.709h3.98l.416-3.958h-3.98l-.416 3.958zm-92.5 0l.416-3.958h-3.98l-.416 3.958h3.98zm-45.731 435.103h-3.98l-.416 3.958h3.98l.416-3.958zm84.375 0l-.416 3.958h2.236l1.363-1.899-3.183-2.059zM390.322 310.52l.416-3.958h-2.237l-1.362 1.899 3.183 2.059zm1.875 0h3.98l.416-3.958h-3.98l-.416 3.958zm-29.815 283.667h92.5l.832-7.916h-92.5l-.832 7.916zm96.896-3.958l45.731-435.103h-7.96l-45.731 435.103h7.96zm42.167-439.061H417.07l-.832 7.916h84.375l.832-7.916zm-87.974 1.899L212.823 432.776l6.366 4.118 200.648-279.71-6.366-4.117zm-197.049 277.81h-1.875l-.832 7.916h1.875l.832-7.916zm1.689 3.958l29.398-279.709h-7.96l-29.398 279.709h7.96zm25.834-283.667h-92.5l-.832 7.916h92.5l.832-7.916zm-96.896 3.958l-45.731 435.103h7.96l45.731-435.103h-7.96zm-42.167 439.061h84.375l.832-7.916h-84.375l-.832 7.916zm87.974-1.899l200.649-279.71-6.366-4.117-200.649 279.71 6.366 4.117zm197.05-277.81h1.875l.832-7.916h-1.875l-.832 7.916zm-1.689-3.958l-29.399 279.709h7.96l29.399-279.709h-7.96zm499.73-133.639l3.388 1.747 2.142-3.574-3.421-1.735-2.109 3.562zm-33.07 385.999l1.613 3.436 3.51-1.882-1.397-3.371-3.726 1.817zm-30.911-74.589l3.727-1.817-1.516-3.66-3.815 2.035 1.604 3.442zm18.51-235.578l-2.12 3.557 3.384 1.732 2.124-3.542-3.388-1.747zm47.58-79.394c-38.484-19.528-76.272-28.367-120.628-28.367l-.832 7.916c43.143 0 79.775 8.564 117.241 27.575l4.219-7.124zm-120.628-28.367c-68.236 0-118.604 24.055-153.54 64.996-34.765 40.74-53.786 97.658-60.625 162.729h7.96c6.749-64.216 25.425-119.181 58.554-158.003 32.957-38.621 80.68-61.806 146.819-61.806l.832-7.916zM555.263 372.677c-6.84 65.071.216 121.99 26.418 162.73 26.33 40.941 71.641 64.996 139.877 64.996l.832-7.916c-66.139 0-108.988-23.185-133.827-61.806-24.968-38.822-32.09-93.787-25.34-158.004h-7.96zm166.295 227.726c48.173 0 92.55-11.359 134.932-34.087l-3.227-6.873c-41.072 22.026-84.046 33.044-130.873 33.044l-.832 7.916zm137.045-39.34l-30.91-74.589-7.454 3.633 30.911 74.59 7.453-3.634zm-36.241-76.214c-28.568 15.238-57.474 23.103-86.087 23.103l-.832 7.917c30.136 0 60.429-8.296 90.128-24.137l-3.209-6.883zm-86.087 23.103c-27.621 0-48.828-12.919-62.198-36.175-13.445-23.387-18.993-57.34-14.604-99.1h-7.96c-4.496 42.775 1.076 78.438 15.504 103.535 14.503 25.226 37.921 39.657 68.426 39.657l.832-7.917zm-76.802-135.275c4.389-41.76 17.074-75.709 35.508-99.092 18.328-23.25 42.407-36.183 70.355-36.183l.832-7.916c-30.802 0-57.411 14.417-77.303 39.65-19.788 25.1-32.857 60.767-37.352 103.541h7.96zm105.863-135.275c26.19 0 49.961 6.042 75.02 18.868l4.241-7.114c-25.948-13.28-50.87-19.67-78.429-19.67l-.832 7.916zm80.528 17.058l45.471-75.832-6.776-3.494-45.47 75.832 6.775 3.494zm337.916 335.769l-.42 3.958h3.98l.42-3.958h-3.98zm8.88-84.534h3.98l.42-3.958h-3.98l-.42 3.958zm-173.75 0h-3.98l-.41 3.958h3.98l.41-3.958zm10.33-98.209l.41-3.959h-3.98l-.41 3.959h3.98zm142.5 0l-.42 3.958h3.98l.42-3.958h-3.98zm8.88-84.535h3.98l.42-3.958h-3.98l-.42 3.958zm-142.5 0h-3.98l-.41 3.958h3.98l.41-3.958zm8.76-83.291l.41-3.958h-3.98l-.41 3.958h3.98zm161.25 0l-.42 3.958h3.44l.85-3.382-3.87-.576zm21.38-84.534l3.88.576 1.14-4.534h-4.6l-.42 3.958zm-259.999 0l.416-3.958h-3.98l-.416 3.958h3.98zm-45.732 435.103h-3.98l-.416 3.958h3.98l.416-3.958zm263.981 0l8.88-84.534h-7.96l-8.88 84.534h7.96zm5.32-88.492h-173.75l-.83 7.916h173.75l.83-7.916zm-170.19 3.958l10.33-98.209h-7.96l-10.33 98.209h7.96zm5.93-94.251h142.5l.83-7.917h-142.5l-.83 7.917zm146.9-3.958l8.88-84.535h-7.96l-8.88 84.535h7.96zm5.32-88.493h-142.5l-.83 7.916h142.5l.83-7.916zm-138.94 3.958l8.76-83.291h-7.96l-8.76 83.291h7.96zm4.36-79.333h161.25l.83-7.916h-161.25l-.83 7.916zm165.54-3.382l21.39-84.534-7.76-1.152-21.38 84.534 7.75 1.152zm17.93-89.068H969.927l-.832 7.916h259.995l.84-7.916zm-264.399 3.958l-45.732 435.103h7.96l45.732-435.103h-7.96zm-42.168 439.061h259.997l.84-7.916H924.195l-.832 7.916zM1592.29 239.66l-.42 3.958h3.44l.86-3.382-3.88-.576zm21.39-84.534l3.87.576 1.15-4.534h-4.61l-.41 3.958zm-340.63 0l.42-3.958h-3.98l-.42 3.958h3.98zm-8.88 84.534h-3.98l-.42 3.958h3.98l.42-3.958zm123.75 0h3.98l.41-3.958h-3.98l-.41 3.958zm-36.85 350.569h-3.98l-.42 3.958h3.98l.42-3.958zm92.5 0l-.42 3.958h3.98l.42-3.958h-3.98zm36.85-350.569l.41-3.958h-3.98l-.41 3.958h3.98zm115.75.576l21.38-84.534-7.75-1.152-21.39 84.534 7.76 1.152zm17.92-89.068h-340.62l-.84 7.916h340.63l.83-7.916zm-345.02 3.958l-8.88 84.534h7.96l8.88-84.534h-7.96zm-5.32 88.492h123.75l.83-7.916h-123.75l-.83 7.916zm120.19-3.958l-36.85 350.569h7.96l36.85-350.569h-7.96zm-33.29 354.527h92.5l.84-7.916h-92.5l-.84 7.916zm96.9-3.958l36.85-350.569h-7.96l-36.85 350.569h7.96zM1480 243.618h111.87l.84-7.916h-111.88l-.83 7.916zm265.19 78.09h-3.98l-.42 3.958h3.98l.42-3.958zm17.5-166.582h3.98l.42-3.958h-3.98l-.42 3.958zm-92.5 0l.42-3.958h-3.98l-.42 3.958h3.98zm-45.73 435.103h-3.98l-.41 3.958h3.98l.41-3.958zm101.39-84.534h-3.98l-.42 3.958h3.98l.42-3.958zm10.58-100.696l.42-3.958h-3.98l-.42 3.958h3.98zm12.74-83.291l17.5-166.582h-7.96l-17.5 166.582h7.96zm13.94-170.54h-92.5l-.83 7.916h92.5l.83-7.916zm-96.9 3.958l-45.73 435.103h7.96l45.73-435.103h-7.96zm-42.16 439.061h151.25l.83-7.916h-151.25l-.83 7.916zm151.25 0c46.23 0 86.29-11.493 116.08-34.748 29.89-23.334 48.9-58.083 53.67-103.47h-7.96c-4.57 43.498-22.61 75.879-50.25 97.453-27.74 21.654-65.7 32.849-110.71 32.849l-.83 7.916zm169.75-138.218c4.78-45.4-7.1-80.146-32.16-103.475-24.98-23.248-62.61-34.744-108.54-34.744l-.83 7.916c44.7 0 80.3 11.192 103.57 32.852 23.19 21.581 34.57 53.965 30 97.451h7.96zm-140.7-138.219h-58.75l-.83 7.916h58.75l.83-7.916zm-13.96 91.207c20.96 0 34.47 5.136 42.41 13.174 7.89 7.994 10.81 19.398 9.36 33.216h7.96c1.62-15.396-1.57-29.166-11.32-39.042-9.72-9.832-25.41-15.264-47.58-15.264l-.83 7.916zm51.77 46.39c-1.35 12.796-6.77 24.265-16.47 32.552-9.71 8.297-24.21 13.838-44.43 13.838l-.83 7.916c21.66 0 38.37-5.959 50.12-15.998 11.76-10.049 18.04-23.755 19.57-38.308h-7.96zm-60.9 46.39h-55l-.83 7.916h55l.83-7.916zm-51.43 3.958l10.58-100.696h-7.96l-10.58 100.696h7.96zm6.19-96.738h54.37l.83-7.916h-54.37l-.83 7.916z"></path>
              <path fill="#FFD200" fillOpacity="0.6" d="M362.795 558.125h-3.98l-.416 3.958h3.98l.416-3.958zm92.5 0l-.416 3.958h3.98l.416-3.958h-3.98zm45.731-435.103h3.98l.416-3.958h-3.98l-.416 3.958zm-84.375 0l.416-3.958h-2.237l-1.362 1.899 3.183 2.059zM216.002 402.731l-.416 3.958h2.236l1.363-1.899-3.183-2.059zm-1.875 0h-3.98l-.416 3.958h3.98l.416-3.958zm29.399-279.709h3.98l.416-3.958h-3.98l-.416 3.958zm-92.5 0l.416-3.958h-3.98l-.416 3.958h3.98zm-45.731 435.103h-3.98l-.416 3.958h3.98l.416-3.958zm84.375 0l-.416 3.958h2.236l1.363-1.899-3.183-2.059zm200.648-279.709l.416-3.958h-2.236l-1.363 1.899 3.183 2.059zm1.875 0h3.98l.416-3.958h-3.98l-.416 3.958zm-29.814 283.667h92.5l.832-7.916h-92.5l-.832 7.916zm96.896-3.958l45.731-435.103h-7.96l-45.731 435.103h7.96zm42.167-439.061h-84.375l-.832 7.916h84.375l.832-7.916zm-87.974 1.899L212.819 400.672l6.366 4.118 200.649-279.71-6.366-4.117zm-197.05 277.81h-1.875l-.832 7.916h1.875l.832-7.916zm1.689 3.958l29.399-279.709h-7.96l-29.399 279.709h7.96zm25.835-283.667h-92.5l-.832 7.916h92.5l.832-7.916zm-96.896 3.958l-45.731 435.103h7.96l45.731-435.103h-7.96zm-42.167 439.061h84.375l.832-7.916h-84.375l-.832 7.916zm87.974-1.899l200.648-279.71-6.366-4.117-200.648 279.71 6.366 4.117zm197.049-277.81h1.875l.832-7.916h-1.875l-.832 7.916zm-1.689-3.958l-29.398 279.709h7.96l29.398-279.709h-7.96zm499.73-133.639l3.388 1.747 2.143-3.574-3.421-1.735-2.11 3.562zm-33.07 385.999l1.614 3.436 3.51-1.882-1.397-3.371-3.727 1.817zm-30.91-74.589l3.727-1.817-1.517-3.66-3.815 2.035 1.605 3.442zm18.51-235.578l-2.12 3.557 3.384 1.732 2.124-3.542-3.388-1.747zm47.58-79.394c-38.484-19.528-76.273-28.367-120.629-28.367l-.832 7.916c43.144 0 79.776 8.564 117.242 27.575l4.219-7.124zm-120.629-28.367c-68.236 0-118.603 24.055-153.54 64.996-34.765 40.74-53.785 97.658-60.625 162.729h7.96c6.75-64.216 25.426-119.181 58.554-158.003 32.957-38.621 80.68-61.806 146.819-61.806l.832-7.916zM555.259 340.573c-6.839 65.071.217 121.99 26.418 162.73 26.331 40.941 71.641 64.996 139.877 64.996l.832-7.916c-66.139 0-108.988-23.185-133.826-61.806-24.968-38.822-32.09-93.787-25.341-158.004h-7.96zm166.295 227.726c48.174 0 92.551-11.359 134.933-34.087l-3.227-6.873c-41.072 22.026-84.047 33.044-130.874 33.044l-.832 7.916zm137.046-39.34l-30.91-74.589-7.454 3.633 30.91 74.59 7.454-3.634zm-36.242-76.214c-28.568 15.238-57.473 23.103-86.087 23.103l-.832 7.917c30.136 0 60.43-8.296 90.128-24.137l-3.209-6.883zm-86.087 23.103c-27.62 0-48.827-12.919-62.198-36.175-13.445-23.387-18.993-57.34-14.604-99.1h-7.96c-4.496 42.775 1.077 78.438 15.505 103.535 14.502 25.226 37.921 39.657 68.425 39.657l.832-7.917zm-76.802-135.275c4.389-41.76 17.075-75.709 35.508-99.092 18.329-23.25 42.407-36.183 70.355-36.183l.832-7.916c-30.802 0-57.41 14.417-77.303 39.65-19.787 25.1-32.856 60.767-37.352 103.541h7.96zm105.863-135.275c26.191 0 49.962 6.042 75.021 18.868l4.24-7.114c-25.947-13.28-50.869-19.67-78.429-19.67l-.832 7.916zm80.529 17.058l45.47-75.832-6.776-3.494-45.47 75.832 6.776 3.494zm337.919 335.769l-.42 3.958h3.98l.42-3.958h-3.98zm8.88-84.534h3.98l.42-3.959h-3.98l-.42 3.959zm-173.75 0h-3.98l-.42 3.958h3.98l.42-3.958zm10.32-98.209l.42-3.959h-3.98l-.42 3.959h3.98zm142.5 0l-.41 3.958h3.98l.41-3.958h-3.98zm8.89-84.535h3.98l.41-3.958h-3.98l-.41 3.958zm-142.5 0h-3.98l-.42 3.958h3.98l.42-3.958zm8.75-83.291l.42-3.958h-3.98l-.42 3.958h3.98zm161.25 0l-.41 3.958h3.43l.86-3.382-3.88-.576zm21.39-84.534l3.87.576 1.15-4.534h-4.61l-.41 3.958zm-260.003 0l.416-3.958h-3.98l-.416 3.958h3.98zm-45.731 435.103h-3.98l-.416 3.958h3.98l.416-3.958zm263.984 0l8.88-84.534h-7.96l-8.88 84.534h7.96zm5.32-88.493h-173.75l-.84 7.917h173.75l.84-7.917zm-170.19 3.959l10.32-98.209h-7.96l-10.32 98.209h7.96zm5.93-94.251h142.5l.83-7.917h-142.5l-.83 7.917zm146.89-3.958l8.89-84.535h-7.96l-8.89 84.535h7.96zm5.32-88.493h-142.5l-.83 7.916h142.5l.83-7.916zm-138.93 3.958l8.75-83.291h-7.96l-8.75 83.291h7.96zm4.36-79.333h161.25l.83-7.916h-161.25l-.83 7.916zm165.54-3.382l21.38-84.534-7.75-1.152-21.38 84.534 7.75 1.152zm17.92-89.068H969.923l-.832 7.916h259.999l.83-7.916zm-264.393 3.958l-45.731 435.103h7.96l45.731-435.103h-7.96zM923.36 562.083h260l.83-7.916H924.192l-.832 7.916zm668.93-354.527l-.42 3.958h3.44l.85-3.382-3.87-.576zm21.38-84.534l3.88.576 1.15-4.534h-4.61l-.42 3.958zm-340.62 0l.41-3.958h-3.98l-.41 3.958h3.98zm-8.89 84.534h-3.98l-.41 3.958h3.98l.41-3.958zm123.75 0h3.98l.42-3.958h-3.98l-.42 3.958zm-36.84 350.569h-3.98l-.42 3.958h3.98l.42-3.958zm92.5 0l-.42 3.958h3.98l.42-3.958h-3.98zm36.84-350.569l.42-3.958h-3.98l-.42 3.958h3.98zm115.75.576l21.39-84.534-7.75-1.152-21.39 84.534 7.75 1.152zm17.93-89.068h-340.63l-.83 7.916h340.63l.83-7.916zm-345.02 3.958l-8.89 84.534h7.96l8.89-84.534h-7.96zm-5.32 88.492h123.75l.83-7.916h-123.75l-.83 7.916zm120.18-3.958l-36.84 350.569h7.96l36.84-350.569h-7.96zm-33.28 354.527h92.5l.83-7.916h-92.5l-.83 7.916zm96.9-3.958l36.84-350.569h-7.96l-36.84 350.569h7.96zM1480 211.514h111.87l.83-7.916h-111.87l-.83 7.916zm265.18 78.09h-3.98l-.41 3.958h3.98l.41-3.958zm17.51-166.582h3.98l.42-3.958h-3.98l-.42 3.958zm-92.5 0l.42-3.958h-3.98l-.42 3.958h3.98zm-45.73 435.103h-3.98l-.42 3.958h3.98l.42-3.958zm101.38-84.534h-3.98l-.41 3.958h3.98l.41-3.958zm10.59-100.696l.41-3.958h-3.98l-.41 3.958h3.98zm12.73-83.291l17.51-166.582h-7.96l-17.51 166.582h7.96zm13.95-170.54h-92.5l-.84 7.916h92.5l.84-7.916zm-96.9 3.958l-45.73 435.103h7.96l45.73-435.103h-7.96zm-42.17 439.061h151.25l.84-7.916h-151.25l-.84 7.916zm151.25 0c46.24 0 86.29-11.493 116.09-34.748 29.89-23.334 48.9-58.083 53.67-103.47h-7.96c-4.57 43.498-22.62 75.879-50.25 97.453-27.75 21.654-65.7 32.849-110.71 32.849l-.84 7.916zm169.76-138.218c4.77-45.4-7.1-80.146-32.16-103.475-24.98-23.248-62.61-34.744-108.54-34.744l-.83 7.916c44.69 0 80.3 11.192 103.57 32.852 23.19 21.581 34.57 53.965 30 97.451h7.96zm-140.7-138.219h-58.75l-.83 7.916h58.75l.83-7.916zm-13.96 91.207c20.95 0 34.46 5.136 42.4 13.174 7.9 7.994 10.82 19.398 9.37 33.216h7.96c1.61-15.396-1.57-29.166-11.33-39.042-9.71-9.832-25.4-15.264-47.57-15.264l-.83 7.916zm51.77 46.39c-1.35 12.796-6.78 24.265-16.47 32.552-9.71 8.297-24.21 13.837-44.43 13.837l-.83 7.917c21.66 0 38.37-5.959 50.12-15.998 11.76-10.049 18.04-23.755 19.57-38.308h-7.96zm-60.9 46.389h-55l-.83 7.917h55l.83-7.917zm-51.44 3.959l10.59-100.696h-7.96l-10.59 100.696h7.96zm6.19-96.738h54.38l.83-7.916h-54.38l-.83 7.916z"></path>
            </svg>

            <p className={'iset__description'}>
              Исеть&nbsp;&mdash; открытый динамический гротеск. Обладает ясными формами, с&nbsp;характерными деталями в&nbsp;строчных и&nbsp;прописных буквах, которые помогают быстро и&nbsp;безошибочно считывать форму знаков.
            </p>

            <a href="#" className={'iset__link'}>
              Шрифт «Исеть»
            </a>
          </div>

          <h3 className={'section-heading section-heading_support-us'}>Поддержите<br />нас</h3>

          <p className={'support-description'}>
            Дизайн-код Екатеринбурга — инициативный проект независимых дизайнеров города.
            Мы разрабатываем единые визуальные стандарты городской среды и внедряем их в жизнь.
          </p>

          <a className={'support-link'} href="/">помочь проекту →</a>
        </section>

        <section className={'section'} id="team">
          <h2 className={'section-heading section-heading_team'}>Команда</h2>

          <TeamList team={team} />
        </section>


        <section className={'section'} id="partners">
          <h2 className={'section-heading section-heading_partners'}>Партнеры</h2>

          <Partners partners={partners} />
        </section>

        <section className={'section'} id="contacts">
          <h2 className={'section-heading section-heading_contacts'}>Почта<br />и соцсети</h2>

          <Contacts />
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getNotionDatabaseItems('Projects'),
      team: [
        ... await getNotionDatabaseItems('TeamOld'),
        ... await getNotionDatabaseItems('TeamNew')
      ],
      partners: await getNotionDatabaseItems('Partners')
    },
    //revalidate: 60,
  }
}
