<template>
    <div class="container">
        <div class="hero">
            <h1>Saluton!</h1>
            <h2>Welcome to my website! I'm Ludoviko, rarely known as Luĉjo. I hope that you enjoy your stay here.</h2>
        </div>
        <Sect title="About" sub="So a bit about me:" id="about">
            <ul>
                <li>Age: 22</li>
                <li>Location: Europe</li>
                <li>Sexuality: Whatever it is, it isn't straight!</li>
                <li>Pronouns: they/them/theirs</li>
                <li>Gender: Male-ish</li>
                <li>Languages: en-GB, es-ES, eo-EO</li>
            </ul>
        </Sect>
        <Sect title="Projects" sub="" id="projects">
            <Card
                title="VannerBasta"
                desc="A website to promote the Netflix TV programme 'Young Royals'. Not seen it yet? You totally should, there's a link on this website that will take you straight to Netflix!"
                :links="projLinks">
                </Card>
        </Sect>
    </div>
</template>

<script setup>
const projLinks = [
    {
        title: 'Source',
        to: 'https://github.com/Lucxjo/friends-best',
        isExternal: true
    },
    {
        title: 'View',
        to: 'https://vannerba.st/',
        isExternal: true
    },
]
</script>

<style lang="scss" scoped>
.hero {
    background-color: #0e5faa;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem;
    width: 80%;
}
</style>