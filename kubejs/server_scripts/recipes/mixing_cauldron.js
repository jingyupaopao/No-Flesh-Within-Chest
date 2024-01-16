function MixingCauldronRecipe(ingredients, output) {
    this.type = 'hexerei:mixingcauldron'
    // 原料长度必须为8
    this.ingredients = ingredients
    this.output = output
    this.liquid = { fluid: 'minecraft:water' }
    this.liquidOutput = { fluid: 'minecraft:water' }
    this.fluidLevelsConsumed = 0
}

MixingCauldronRecipe.prototype = {
    setHeatRequirement: function (requirement) {
        this.heatRequirement = requirement
        return this
    },
    setFluid: function (fluid, amount) {
        this.liquid = { 'fluid': fluid }
        this.fluidLevelsConsumed = amount
        return this
    },
    setFluidOutput: function (fluid) {
        this.liquidOutput = { 'fluid': fluid }
        return this
    },
    addHeatRequirement: function () {
        this.heatRequirement = 'heated'
        return this
    },
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:ingots/gold'), Ingredient.of('#bookwyrms:scale'), Ingredient.of('minecraft:redstone'), Ingredient.of('hexerei:dried_sage'), Ingredient.of('hexerei:dried_sage'), Ingredient.of('hexerei:dried_mandrake_flowers'), Ingredient.of('hexerei:dried_mandrake_flowers')],
        Item.of('kubejs:silver_ingot').withCount(4)))

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone'), Ingredient.of('kubejs:lucky_appendix'), Ingredient.of('minecraft:redstone'), Ingredient.of('minecraft:redstone')],
        Item.of('kubejs:health_appendix')))

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar'), Ingredient.of('minecraft:sugar')],
        Item.of('kubejs:scrap')).setFluid('minecraft:water', 20).setFluidOutput('kubejs:syrup'))

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('kubejs:magic_muscle'), Ingredient.of('minecraft:enchanted_book'), Ingredient.of('waystones:warp_dust'), Ingredient.of('waystones:warp_dust'), Ingredient.of('#forge:dusts/glowstone'), Ingredient.of('#forge:dusts/glowstone'), Ingredient.of('irons_spellbooks:arcane_essence'), Ingredient.of('irons_spellbooks:arcane_essence')],
        Item.of('kubejs:magic_hippocampus')))

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:ink_sac'), Ingredient.of('hexerei:dried_yellow_dock_flowers'), Ingredient.of('hexerei:dried_mugwort_flowers'), Ingredient.of('hexerei:dried_mugwort_flowers'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle'), Ingredient.of('minecraft:glass_bottle')],
        Item.of('irons_spellbooks:common_ink').withCount(4)).setFluid('minecraft:water', 1000))

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('minecraft:redstone_block'), Ingredient.of('kubejs:lime_powder')],
        Item.of('create:scoria').withCount(8)).setFluid('minecraft:lava', 1000).setFluidOutput('hexerei:quicksilver_fluid').addHeatRequirement())

    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('biomancy:healing_additive'), Ingredient.of('biomancy:healing_additive'), Ingredient.of('goety:animation_core'), Ingredient.of('goety:animation_core'), Ingredient.of('irons_spellbooks:greater_healing_potion'), Ingredient.of('irons_spellbooks:arcane_salvage'), Ingredient.of('hexerei:mindful_trance_blend'), Ingredient.of('kubejs:active_pill')],
        Item.of('kubejs:long_lasting_pill').withCount(1)).setFluid('createaddition:bioethanol', 500).setFluidOutput('minecraft:water').addHeatRequirement())
        
    registerCustomRecipe(new MixingCauldronRecipe(
        [Ingredient.of('biomancy:cleansing_serum'), Ingredient.of('biomancy:cleansing_serum'), Ingredient.of('goety:soul_heal_focus'), Ingredient.of('goety:soul_heal_focus'), Ingredient.of('minecraft:enchanted_golden_apple'), Ingredient.of('goety:philosophers_stone'), Ingredient.of('hexerei:mindful_trance_blend'), Ingredient.of('kubejs:long_lasting_pill')],
        Item.of('kubejs:long_lasting_pill_gold').withCount(1)).setFluid('hexerei:quicksilver_fluid', 500).setFluidOutput('minecraft:water').addHeatRequirement())
        
})
