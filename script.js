let upper_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower_alpha = 'abcdefghijklmnopqrstuvwxyz'
let numbers = "0123456789"
let symbols = "@#$%^&*-_+"

let generate_btn = document.getElementById("btn")
let input = document.getElementById('generated')

// console.log(generate_btn)

generate_btn.addEventListener('click', () => {
    let generated_pass = ''
    let chance = Math.floor(Math.random() * 2)
    // console.log(chance)
    if (chance == 0) {
        var character_len = upper_alpha.length
        generated_pass += upper_alpha.charAt(Math.floor(Math.random() * character_len))
        // console.log(generated_pass)
    }
    else if (chance == 1) {
        var character_len = lower_alpha.length
        generated_pass += lower_alpha.charAt(Math.floor(Math.random() * character_len))
        // console.log(generated_pass)
    }

    for (let i = 0; i < 7; i++) {
        let chance = Math.floor(Math.random() * 4)
        if (chance == 0) {
            var character_len = upper_alpha.length
            generated_pass += upper_alpha.charAt(Math.floor(Math.random() * character_len))
            // console.log(generated_pass)
        }
        else if (chance == 1) {
            var character_len = lower_alpha.length
            generated_pass += lower_alpha.charAt(Math.floor(Math.random() * character_len))
            // console.log(generated_pass)
        }
        else if (chance == 2) {
            var character_len = numbers.length
            generated_pass += numbers.charAt(Math.floor(Math.random() * character_len))
            // console.log(generated_pass)
        }
        else if (chance == 3) {
            var character_len = symbols.length
            generated_pass += symbols.charAt(Math.floor(Math.random() * character_len))
            // console.log(generated_pass)
        }
    }
    // console.log(generated_pass)
    input.value = generated_pass
})



const copy = async () => {
    let pass = input.value
    try {
        await navigator.clipboard.writeText(pass)
    }
    catch (err) {
        console.error('Failed to copy: ', err)
    }
}
