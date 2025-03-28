function add_small_digit_hor_part(element, x, y, class_list) {
    let part = `<div class="digit-part ${class_list}" style="--x: ${x}; --y: ${y};">`;

    for(let i=0; i<4; i++)
        part += `<div class="light" style="--x: ${i+0.5}; --y: -0.5;"></div>`

    for(let i=0; i<5; i++)
        part += `<div class="light" style="--x: ${i}; --y: 0;"></div>`

    for(let i=0; i<4; i++)
        part += `<div class="light" style="--x: ${i+0.5}; --y: 0.5;"></div>`

    part += "</div>"

    element.innerHTML += part;
}

function add_small_digit_ver_part(element, x, y, class_list) {
    let part = `<div class="digit-part ${class_list}" style="--x: ${x}; --y: ${y};">`;

    for(let i=0; i<4; i++)
        part += `<div class="light" style="--x: -0.5; --y: ${i+0.5};"></div>`

    for(let i=0; i<5; i++)
        part += `<div class="light" style="--x: 0; --y: ${i};"></div>`

    for(let i=0; i<4; i++)
        part += `<div class="light" style="--x: 0.5; --y: ${i+0.5};"></div>`

    part += "</div>"

    element.innerHTML += part;
}

function make_small_digit(x, y) {
    let digit = document.createElement("div");

    digit.classList.add("digit");
    digit.style.setProperty("--x", `${x}`);
    digit.style.setProperty("--y", `${y}`);

    add_small_digit_hor_part(digit, 1, 0.5, "digit-part-0 digit-part-2 digit-part-3 digit-part-5 digit-part-6 digit-part-7 digit-part-8 digit-part-9");
    add_small_digit_hor_part(digit, 1, 5.5, "digit-part-2 digit-part-3 digit-part-4 digit-part-5 digit-part-6 digit-part-8 digit-part-9");
    add_small_digit_hor_part(digit, 1, 10.5, "digit-part-0 digit-part-2 digit-part-3 digit-part-5 digit-part-6 digit-part-8 digit-part-9");

    add_small_digit_ver_part(digit, 0.5, 1, "digit-part-0 digit-part-4 digit-part-5 digit-part-6 digit-part-8 digit-part-9");
    add_small_digit_ver_part(digit, 5.5, 1, "digit-part-0 digit-part-1 digit-part-2 digit-part-3 digit-part-4 digit-part-7 digit-part-8 digit-part-9");
    add_small_digit_ver_part(digit, 0.5, 6, "digit-part-0 digit-part-2 digit-part-6 digit-part-8");
    add_small_digit_ver_part(digit, 5.5, 6, "digit-part-0 digit-part-1 digit-part-3 digit-part-4 digit-part-5 digit-part-6 digit-part-7 digit-part-8 digit-part-9");

    return digit;
}

function add_big_digit_hor_part(element, x, y, class_list) {
    let part = `<div class="digit-part ${class_list}" style="--x: ${x}; --y: ${y};">`;

    for(let i=0; i<9; i++)
        part += `<div class="light" style="--x: ${i+0.5}; --y: -0.5;"></div>`
    
    for(let i=0; i<10; i++)
        part += `<div class="light" style="--x: ${i}; --y: 0;"></div>`

    for(let i=0; i<9; i++)
        part += `<div class="light" style="--x: ${i+0.5}; --y: 0.5;"></div>`

    for(let i=0; i<8; i++)
        part += `<div class="light" style="--x: ${i+1}; --y: 1;"></div>`

    part += "</div>"

    element.innerHTML += part;
}

function add_big_digit_ver_part_left(element, x, y, class_list) {
    let part = `<div class="digit-part ${class_list}" style="--x: ${x}; --y: ${y};">`;

    for(let i=0; i<9; i++)
        part += `<div class="light" style="--x: -0.5; --y: ${i+0.5};"></div>`

    for(let i=0; i<10; i++)
        part += `<div class="light" style="--x: 0; --y: ${i};"></div>`

    for(let i=0; i<9; i++)
        part += `<div class="light" style="--x: 0.5; --y: ${i+0.5};"></div>`

    for(let i=0; i<8; i++)
        part += `<div class="light" style="--x: 1; --y: ${i+1};"></div>`

    part += "</div>"

    element.innerHTML += part;
}

function add_big_digit_ver_part_right(element, x, y, class_list) {
    let part = `<div class="digit-part ${class_list}" style="--x: ${x}; --y: ${y};">`;

    for(let i=0; i<8; i++)
        part += `<div class="light" style="--x: -1; --y: ${i+1};"></div>`

    for(let i=0; i<9; i++)
        part += `<div class="light" style="--x: -0.5; --y: ${i+0.5};"></div>`

    for(let i=0; i<10; i++)
        part += `<div class="light" style="--x: 0; --y: ${i};"></div>`

    for(let i=0; i<9; i++)
        part += `<div class="light" style="--x: 0.5; --y: ${i+0.5};"></div>`

    part += "</div>"

    element.innerHTML += part;
}

function make_big_digit(x, y) {
    let digit = document.createElement("div");

    digit.classList.add("digit");
    digit.style.setProperty("--x", `${x}`);
    digit.style.setProperty("--y", `${y}`);

    add_big_digit_hor_part(digit, 1, 0.5, "digit-part-0 digit-part-2 digit-part-3 digit-part-5 digit-part-6 digit-part-7 digit-part-8 digit-part-9");
    add_big_digit_hor_part(digit, 1, 10.5, "digit-part-2 digit-part-3 digit-part-4 digit-part-5 digit-part-6 digit-part-8 digit-part-9");
    add_big_digit_hor_part(digit, 1, 20.5, "digit-part-0 digit-part-2 digit-part-3 digit-part-5 digit-part-6 digit-part-8 digit-part-9");

    add_big_digit_ver_part_left(digit, 0.5, 1, "digit-part-0 digit-part-4 digit-part-5 digit-part-6 digit-part-8 digit-part-9");
    add_big_digit_ver_part_right(digit, 10.5, 1, "digit-part-0 digit-part-1 digit-part-2 digit-part-3 digit-part-4 digit-part-7 digit-part-8 digit-part-9");
    add_big_digit_ver_part_left(digit, 0.5, 11, "digit-part-0 digit-part-2 digit-part-6 digit-part-8");
    add_big_digit_ver_part_right(digit, 10.5, 11, "digit-part-0 digit-part-1 digit-part-3 digit-part-4 digit-part-5 digit-part-6 digit-part-7 digit-part-8 digit-part-9");

    return digit;
}

function make_small_dot(x, y) {
    let dot = document.createElement("div");

    dot.classList.add("dot");
    dot.style.setProperty("--x", `${x}`);
    dot.style.setProperty("--y", `${y}`);

    dot.innerHTML += `<div class="light" style="--x: 0; --y: -0.5;"></div>`
    dot.innerHTML += `<div class="light" style="--x: -0.5; --y: 0;"></div>`
    dot.innerHTML += `<div class="light" style="--x: 0.5; --y: 0;"></div>`
    dot.innerHTML += `<div class="light" style="--x: 0; --y: 0.5;"></div>`

    return dot;
}

function make_big_dot(x, y) {
    let dot = document.createElement("div");

    dot.classList.add("dot");
    dot.style.setProperty("--x", `${x}`);
    dot.style.setProperty("--y", `${y}`);

    dot.innerHTML += `<div class="light" style="--x: 0; --y: 0;"></div>`
    for(let i=0; i<7; i++)
        dot.innerHTML += `<div class="light" style="--x: ${Math.cos((0.5 - i * 2/7)*Math.PI) * 1.414/2}; --y: ${Math.sin((0.5 - i * 2/7)*Math.PI) * 1.414/2};"></div>`

    return dot;
}

function make_frame() {
    let frame = document.createElement("div");

    frame.classList.add("frame");

    for(let i=0; i<40; i++)
        frame.innerHTML += `<div class="light" style="--x: ${i+1}; --y: 0;"></div>`

    for(let i=0; i<41; i++)
        frame.innerHTML += `<div class="light" style="--x: ${i+0.5}; --y: 0.5;"></div>`

    for(let i=0; i<40; i++)
        frame.innerHTML += `<div class="light" style="--x: ${i+1}; --y: 1;"></div>`

    for(let i=0; i<40; i++)
        frame.innerHTML += `<div class="light" style="--x: ${i+1}; --y: 42;"></div>`

    for(let i=0; i<41; i++)
        frame.innerHTML += `<div class="light" style="--x: ${i+0.5}; --y: 42.5;"></div>`

    for(let i=0; i<40; i++)
        frame.innerHTML += `<div class="light" style="--x: ${i+1}; --y: 43;"></div>`

    for(let i=0; i<42; i++)
        frame.innerHTML += `<div class="light" style="--x: 0; --y: ${i+1};"></div>`

    for(let i=0; i<41; i++)
        frame.innerHTML += `<div class="light" style="--x: 0.5; --y: ${i+1.5};"></div>`

    for(let i=0; i<40; i++)
        frame.innerHTML += `<div class="light" style="--x: 1; --y: ${i+2};"></div>`

    for(let i=0; i<42; i++)
        frame.innerHTML += `<div class="light" style="--x: 41; --y: ${i+1};"></div>`

    for(let i=0; i<41; i++)
        frame.innerHTML += `<div class="light" style="--x: 40.5; --y: ${i+1.5};"></div>`

    for(let i=0; i<40; i++)
        frame.innerHTML += `<div class="light" style="--x: 40; --y: ${i+2};"></div>`

    return frame;
}

addEventListener("DOMContentLoaded", (event) => {

    const shot_clock_container = document.getElementsByClassName("shot-clock-container")[0];
    //shot_clock_container.style.setProperty("--gap", `${shot_clock_container.offsetWidth / 41}px`);

    const digit_s1 = make_small_digit(4, 3.5);
    digit_s1.classList.add("color-yellow");
    shot_clock_container.appendChild(digit_s1);

    const digit_s2 = make_small_digit(12, 3.5);
    digit_s2.classList.add("color-yellow");
    shot_clock_container.appendChild(digit_s2);

    const digit_s3 = make_small_digit(23, 3.5);
    digit_s3.classList.add("color-yellow");
    shot_clock_container.appendChild(digit_s3);

    const digit_s4 = make_small_digit(31, 3.5);
    digit_s4.classList.add("color-yellow");
    shot_clock_container.appendChild(digit_s4);

    const digit_b1 = make_big_digit(8, 18);
    digit_b1.classList.add("color-red");
    shot_clock_container.appendChild(digit_b1);

    const digit_b2 = make_big_digit(22, 18);
    digit_b2.classList.add("color-red");
    shot_clock_container.appendChild(digit_b2);

    const digit_s5 = make_small_digit(22, 28.5);
    digit_s5.classList.add("color-red");
    shot_clock_container.appendChild(digit_s5);

    const dot_s1 = make_small_dot(20.5, 7);
    dot_s1.classList.add("color-yellow");
    shot_clock_container.appendChild(dot_s1);

    const dot_s2 = make_small_dot(20.5, 11);
    dot_s2.classList.add("color-yellow");
    shot_clock_container.appendChild(dot_s2);

    const dot_s3 = make_small_dot(20.5, 13.5);
    dot_s3.classList.add("color-yellow");
    shot_clock_container.appendChild(dot_s3);

    const dot_b1 = make_big_dot(20.5, 39);
    dot_b1.classList.add("color-red");
    shot_clock_container.appendChild(dot_b1);

    const frame = make_frame();
    frame.classList.add("color-red");
    shot_clock_container.appendChild(frame);

    
    const period = 10;
    let game_time = 10*60*1000;
    let shot_time = 24*1000;
    let buzzer_time = 0;

    let game_clock_running = true;
    let shot_clock_running = true;
    let time_running = false;

    let show_game_clock = true;
    let show_shot_clock = true;

    let timeout = false;

    const main_controls = document.getElementById("main-controls");
    const periods_controls = document.getElementById("periods-controls");
    const set_time_controls = document.getElementById("set-time-controls");

    const buzzer_2 = document.getElementById("buzzer_2");
    const buzzer_4 = document.getElementById("buzzer_4");

    function play_buzzer_2() {
        buzzer_2.currentTime = 0;
        buzzer_2.play();
    }

    function stop_buzzer_2() {
        buzzer_2.pause();
    }

    function play_buzzer_4() {
        buzzer_4.currentTime = 0;
        buzzer_4.play();
    }

    const start_stop_time_button = document.getElementById("start-stop-time-button");
    start_stop_time_button.addEventListener("click", (e) => {
        if(time_running) {
            time_running = false;
            start_stop_time_button.innerHTML = "Start time";
        } else {
            time_running = true;
            start_stop_time_button.innerHTML = "Stop time";
        }
    });
    
    document.getElementById("24s-button").addEventListener("click", (e) => {
        if(timeout)
            return;

        if(game_time > 24*1000) {
            shot_time = 24*1000;
            shot_clock_running = true;
            show_shot_clock = true;
        } else {
            shot_clock_running = false;
            show_shot_clock = false;
        }

        buzzer_time = 0;
        stop_buzzer_2();
    });

    document.getElementById("14s-button").addEventListener("click", (e) => {
        if(timeout)
            return;
        
        if(game_time > 14*1000) {
            shot_time = 14*1000;
            shot_clock_running = true;
            show_shot_clock = true;
        } else {
            shot_clock_running = false;
            show_shot_clock = false;
        }

        buzzer_time = 0;
        stop_buzzer_2();
    });

    document.getElementById("24s-off-button").addEventListener("click", (e) => {
        if(timeout)
            return;
        
        shot_clock_running = false;
        show_shot_clock = false;

        buzzer_time = 0;
        stop_buzzer_2();
    });

    const timout_buttom = document.getElementById("time-out-button");
    timout_buttom.addEventListener("click", (e) => {
        if(timeout) {
            timeout = false;
            timout_buttom.classList.remove("active");
            game_clock_running = true;
            shot_clock_running = true;
            shot_time = 24*1000;
            time_running = false;
            start_stop_time_button.innerHTML = "Start time";
        } else {
            if(time_running)
                return;
            timeout = true;
            timout_buttom.classList.add("active");
            game_clock_running = false;
            shot_clock_running = true;
            shot_time = 60*1000;
            time_running = true;
            start_stop_time_button.innerHTML = "Stop time";
        }
    });

    document.getElementById("periods-button").addEventListener("click", (e) => {
        if(time_running || timeout)
            return;

        main_controls.classList.add("d-none");
        periods_controls.classList.remove("d-none");
    });

    document.getElementById("set-time-button").addEventListener("click", (e) => {
        if(time_running)
            return;

        main_controls.classList.add("d-none");
        set_time_controls.classList.remove("d-none");
    });

    document.getElementById("set-15-button").addEventListener("click", (e) => {
        game_time = 15*60*1000;
        shot_clock_running = false;
        show_shot_clock = false;
    });

    document.getElementById("set-2-button").addEventListener("click", (e) => {
        game_time = 2*60*1000;
        shot_clock_running = false;
        show_shot_clock = false;
    });

    document.getElementById("set-10-button").addEventListener("click", (e) => {
        game_time = 10*60*1000;
        shot_time = 24*1000;
        shot_clock_running = true;
        show_shot_clock = true;
    });

    document.getElementById("set-5-button").addEventListener("click", (e) => {
        game_time = 5*60*1000;
        shot_time = 24*1000;
        shot_clock_running = true;
        show_shot_clock = true;
    });

    document.getElementById("periods-back-button").addEventListener("click", (e) => {
        periods_controls.classList.add("d-none");
        main_controls.classList.remove("d-none");
    });

    document.getElementById("add-10-m-game-button").addEventListener("click", (e) => {
        if(game_time + 10*60*1000 < 100*60*1000)
            game_time += 10*60*1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("add-1-m-game-button").addEventListener("click", (e) => {
        if(game_time + 60*1000 < 100*60*1000)
            game_time += 60*1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("add-10-s-game-button").addEventListener("click", (e) => {
        if(game_time + 10*1000 < 100*60*1000)
            game_time += 10*1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("add-1-s-game-button").addEventListener("click", (e) => {
        if(game_time + 1000 < 100*60*1000)
            game_time += 1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("add-1-t-game-button").addEventListener("click", (e) => {
        if(game_time + 100 < 100*60*1000)
            game_time += 100;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("sub-10-m-game-button").addEventListener("click", (e) => {
        if(game_time - 10*60*1000 >= 0)
            game_time -= 10*60*1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("sub-1-m-game-button").addEventListener("click", (e) => {
        if(game_time - 60*1000 >= 0)
            game_time -= 60*1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("sub-10-s-game-button").addEventListener("click", (e) => {
        if(game_time - 10*1000 >= 0)
            game_time -= 10*1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("sub-1-s-game-button").addEventListener("click", (e) => {
        if(game_time - 1000 >= 0)
            game_time -= 1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("sub-1-t-game-button").addEventListener("click", (e) => {
        if(game_time - 100 >= 0)
            game_time -= 100;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("add-10-s-shot-button").addEventListener("click", (e) => {
        if(shot_time + 10*1000 < 100*1000)
            shot_time += 10*1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("add-1-s-shot-button").addEventListener("click", (e) => {
        if(shot_time + 1000 < 100*1000)
            shot_time += 1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("add-1-t-shot-button").addEventListener("click", (e) => {
        if(shot_time + 100 < 100*1000)
            shot_time += 100;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("sub-10-s-shot-button").addEventListener("click", (e) => {
        if(shot_time - 10*1000 >= 0)
            shot_time -= 10*1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("sub-1-s-shot-button").addEventListener("click", (e) => {
        if(shot_time - 1000 >= 0)
            shot_time -= 1000;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("sub-1-t-shot-button").addEventListener("click", (e) => {
        if(shot_time - 100 >= 0)
            shot_time -= 100;

        if(!show_shot_clock || game_time < shot_time)
            show_shot_clock = false;
        else
            show_shot_clock = true;
    });

    document.getElementById("set-time-back-button").addEventListener("click", (e) => {
        set_time_controls.classList.add("d-none");
        main_controls.classList.remove("d-none");
    });

    function set_digit_value(digit, val) {
        for(let i=0; i<10; i++)
            digit.classList.remove(`digit-${i}`);
        if(0 <= val && val < 10)
            digit.classList.add(`digit-${val}`);
    }
    
    function update() {
        let current_time = performance.now();
        let ellapsed_millis = current_time - prev_time;
        prev_time = current_time;

        if(buzzer_time > 0) {
            buzzer_time -= ellapsed_millis;
            if(buzzer_time < 0)
                buzzer_time = 0;
        }

        if(time_running && game_clock_running && game_time > 0) {
            game_time -= ellapsed_millis;
            if(game_time < 0)
                game_time = 0;

            if(game_time == 0) {
                buzzer_time = 4 * 1000;
                play_buzzer_4();
                time_running = false;
                start_stop_time_button.innerHTML = "Start time";
            }
        }

        if(time_running && shot_clock_running && shot_time > 0) {
            shot_time -= ellapsed_millis;
            if(shot_time < 0)
                shot_time = 0;

            if(shot_time == 0) {
                if(!timeout)
                    buzzer_time = 2 * 1000;
                play_buzzer_2();
            }

            if(timeout && shot_time == 10*1000)
                play_buzzer_2();
        }

        let game_time_tenths = Math.ceil(game_time / (1000) * 10);
        let game_time_minutes = Math.floor(game_time_tenths / 600);
        game_time_tenths -= game_time_minutes * 600;
        let game_time_seconds = Math.floor(game_time_tenths / 10);
        game_time_tenths -= game_time_seconds * 10;

        if(timeout)
            shot_time += 900;
        let shot_time_tenths = Math.ceil(shot_time / (1000) * 10);
        let shot_time_seconds = Math.floor(shot_time_tenths / 10);
        shot_time_tenths -= shot_time_seconds * 10;
        if(timeout)
            shot_time -= 900;

        if(show_game_clock && game_time_minutes < 100) {
            if(game_time_minutes == 0) {
                if(Math.floor(game_time_seconds / 10) > 0)
                    set_digit_value(digit_s1, Math.floor(game_time_seconds / 10));
                else
                    set_digit_value(digit_s1, -1);
                set_digit_value(digit_s2, game_time_seconds - Math.floor(game_time_seconds / 10) * 10);

                set_digit_value(digit_s3, game_time_tenths);
                set_digit_value(digit_s4, -1);

                dot_s1.classList.remove("dot-on");
                dot_s2.classList.remove("dot-on");
                dot_s3.classList.add("dot-on");
            } else {
                if(Math.floor(game_time_minutes / 10) > 0)
                    set_digit_value(digit_s1, Math.floor(game_time_minutes / 10));
                else
                    set_digit_value(digit_s1, -1);
                set_digit_value(digit_s2, game_time_minutes - Math.floor(game_time_minutes / 10) * 10);

                set_digit_value(digit_s3, Math.floor(game_time_seconds / 10));
                set_digit_value(digit_s4, game_time_seconds - Math.floor(game_time_seconds / 10) * 10);

                dot_s1.classList.add("dot-on");
                dot_s2.classList.add("dot-on");
                dot_s3.classList.remove("dot-on");
            }
        } else {
            set_digit_value(digit_s1, -1);
            set_digit_value(digit_s2, -1);
            set_digit_value(digit_s3, -1);
            set_digit_value(digit_s4, -1);

            dot_s1.classList.remove("dot-on");
            dot_s2.classList.remove("dot-on");
            dot_s3.classList.remove("dot-on");
        }

        if(show_shot_clock && shot_time_seconds < 100) {
            if(shot_time_seconds < 5 && !timeout) {
                set_digit_value(digit_b1, shot_time_seconds);
                set_digit_value(digit_b2, -1);

                set_digit_value(digit_s5, shot_time_tenths);
            
                dot_b1.classList.add("dot-on");
            } else {
                if(Math.floor(shot_time_seconds / 10) > 0)
                    set_digit_value(digit_b1, Math.floor(shot_time_seconds / 10));
                else
                    set_digit_value(digit_b1, -1);
                set_digit_value(digit_b2, shot_time_seconds - Math.floor(shot_time_seconds / 10) * 10);

                set_digit_value(digit_s5, -1);
            
                dot_b1.classList.remove("dot-on");
            }
        } else {
            set_digit_value(digit_b1, -1);
            set_digit_value(digit_b2, -1);

            set_digit_value(digit_s5, -1);
            
            dot_b1.classList.remove("dot-on");
        }

        if(buzzer_time > 0)
            frame.classList.add("frame-on");
        else
            frame.classList.remove("frame-on");
    }
    
    let prev_time = performance.now();
    setInterval(update, period);
});
