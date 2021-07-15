<template>
    <div id="header">
        <Menu theme="light" mode="horizontal" @on-select="handleRoute" :active-name="activeMenu"  class="oj-menu">
            <div class="logo"><span>{{website.website_name}}</span>></div>
            <Menu-item name="/">
                <Icon type="home"></Icon>
                {{$t('m.Home')}}
            </Menu-item>
            <Menu-item name="/problem">
    </div>
</template>