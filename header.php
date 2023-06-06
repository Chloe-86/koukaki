<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <div class="nav-menu-me">
                    <p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></p>
                    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>
                </div>
                <div class="container-ul" hidden>
                    <div class='images-menu' hidden>
                            <div class="sunflower"></div>
                            <div class="purple-orchid"></div>
                            <div class="orange-cat"></div>
                            <div class="black-cat"></div>
                            <div class="flower"></div>
                            <div class="pink-flower"></div>
                            <div class="purple-cat"></div>
                            <div class="fleur-orange"></div>
                        </div>
                        <img id="logo-menu" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo">
                        <ul>
                            <li><a href="#story">Histoire</a></li>
                            <li><a href="#characters">Personnages</a></li>
                            <li><a href="#place">Lieu</a></li>
                            <li><a href="#studio">Studio Koukaki</a></li>
                            <li id="studio-header-footer">
                                <a>
                                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/studio.png'; ?> " alt="nom du studio koukaki">
                                </a>
                            </li>
                        </ul>
                       
                </div>


            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->
        <?php
        get_template_part('template-parts/front-page');
