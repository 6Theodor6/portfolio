export const data = {
  en: {
    profile: {
      name: 'Theodor Mounga',
      role: 'Hardware & Embedded Systems Developer',
      location: 'Prague, Czech Republic',
      email: 'theodor.mounga@gmail.com',
      youtube: 'https://www.youtube.com/@Artificerofalltrades',
      summary:
        'Mechatronics engineer with 3 years of commercial R&D experience spanning embedded hardware and firmware development. Hands-on with complete multi-layer PCB design — from precision analog to high-speed DDR3L memory — supply-chain management (DFM/DFA), board bring-up in the lab and rapid prototyping. Looking for a Hardware / Embedded Engineer position in an international R&D centre.',
    },

    skills: [
      {
        name: 'HW Design & PCB',
        icon: 'pcb',
        items: [
          'Multi-layer PCB (4–6 layers)',
          'High-speed layout (DDR3L, impedance & length matching)',
          'Flex-PCB, ESD protections',
          'DFM / DFA',
          'KiCad, EasyEDA',
        ],
      },
      {
        name: 'Embedded & Software',
        icon: 'chip',
        items: [
          'STM32MP157, STM32, ESP32-S3, AVR',
          'Comms: SPI, I2C, UART, CAN, ESP-NOW',
          'C, C++, Python, Git',
          'Linux basics',
        ],
      },
      {
        name: 'Lab & Debugging',
        icon: 'osc',
        items: [
          'Board bring-up',
          'Oscilloscope & logic analyzer',
          'SMD soldering, fault-tracing',
          'Signal & power integrity',
        ],
      },
      {
        name: 'CAD & Prototyping',
        icon: 'cad',
        items: [
          'Fusion 360',
          'Blender (3D rendering)',
          '3D printing (FDM, TPU, PLA)',
          'Rapid prototyping',
        ],
      },
    ],

    education: [
      {
        degree: "Bachelor's degree in Mechatronics",
        school: 'Brno University of Technology (VUT)',
        faculty: 'Faculty of Mechanical Engineering',
        period: '2020 – 2026',
        note: 'State final exam in June 2026',
        desc: 'Bachelor thesis: sensory glove with wireless data fusion.',
      },
      {
        degree: 'Technical Lyceum',
        school: 'SPŠS Betlémská, Prague',
        faculty: 'Secondary technical school',
        period: '2016 – 2020',
        desc: 'Secondary technical school focused on mechanical engineering.',
      },
    ],

    experience: [
      {
        role: 'Research & Development Engineer',
        company: 'UJP PRAHA a.s.',
        period: '2023 – 2026',
        points: [
          'High-Speed System-on-Module for Embedded Linux: complete 6-layer board design (KiCad, stackup JLC06161H) with STM32MP157 processor and 512MB DDR3L RAM.',
          'Signal & Power Integrity: DDR3L memory bus routing (delay tuning / length matching, S-3S rule against crosstalk), impedance control (ETH, USB 2.0 High-Speed) and BGA dog-bone breakout.',
          'Integration of the STPMIC power circuit, CAN bus, JTAG and a test-pin array for hardware debugging in the lab.',
          '4-layer board for precision measurement: carrier board from schematic to assembly (ATmega32U4, Ethernet switch KSZ8863, 32-bit ADC ADS1263).',
          'Implementation and debugging of SPI and I2C communication using an oscilloscope and logic analyzer.',
          'Design of ESD protection for sensitive analog inputs, DFM/DFA rules and communication with a Chinese factory (JLCPCB).',
        ],
      },
    ],

    projects: [
      {
        title: 'STM32MP157 Linux SoM',
        tag: 'High-speed PCB',
        period: '2024 – 2026',
        summary:
          'Custom 6-layer System-on-Module running Linux, with 512MB DDR3L RAM and a full peripheral set.',
        details: [
          '6-layer stackup (SIG | GND | SIG | PWR | GND | SIG) built to JLCPCB JLC06161H specs',
          '512MB DDR3 RAM with strict delay tuning (DQ / A / B categories) and S-3S spacing to minimize crosstalk',
          'Impedance-controlled routing: 50Ω single-ended, 100Ω differential for USB and Ethernet',
          'BGA escape routing via dog-bone vias to keep cost down',
          'Dedicated power: STPMIC with integrated LDO and buck converter',
          'Peripherals: SPI, I2C, USB-C, CAN, UART, JTAG, GPIO, micro SD',
          'ESD protection based on failures of previous board revisions',
          'Board compacted to under 52×52 mm — bare PCB ≈ $2, full board ≈ $30–35',
        ],
        media: [
          { type: 'image', src: '/media/stm32.png', caption: 'STM32 SoM board' },
          { type: 'image', src: '/media/som-ddr3l.jpg', caption: 'DDR3L delay tuning' },
          { type: 'image', src: '/media/som-bga-dogbone.jpg', caption: 'BGA dog-bone breakout' },
        ],
      },
      {
        title: 'Carrier ETH + ADC Board',
        tag: 'Embedded',
        period: '2024 – 2026',
        summary:
          'Carrier board for the SoM with 100 Mbps Ethernet switching and a precision 32-bit ADC for analog measurement.',
        details: [
          '4-layer board with KSZ8863MRLL Ethernet switch (100 Mbps, 2× ETH ports)',
          '25 MHz crystal as clock reference, converted on-chip to 50 MHz',
          'PxLEDx config pins set to (1,1) for correct boot mode',
          '32-bit ADS1263 ADC with 10 analog inputs and ESD protection at connectors',
          '24V → 5V buck converter and 5V → 3.3V LDO',
          'Differential pairing and delay matching on ETH lines (RX0/1, TX0/1)',
          'JTAG connector for debugging the STM32MP157',
          'Full board ≈ $25–27',
        ],
        media: [
          { type: 'image', src: '/media/carrier-eth.jpg', caption: 'ETH switching section' },
          { type: 'image', src: '/media/carrier-adc-side.jpg', caption: 'Analog measurement side' },
        ],
      },
      {
        title: 'Sensory Glove (Bachelor Thesis)',
        tag: 'Research',
        period: '2023 – 2024',
        summary:
          'Wireless glove with custom PCB and multiple sensor types for sensing hand movement and interaction.',
        details: [
          'Custom PCB design with ESP32-S3 MCU and MPU6050 IMU (I2C), USB debugging interface',
          'Experiments with flexible PCB (Flex-PCB) and sensor characterization (piezo, Velostat, Hall sensors) on a custom test station',
          'Body designed in Fusion 360, FDM printed from PLA and TPU',
          'Real-time wireless data streaming via ESP-NOW to a remote computer in Unity',
        ],
        media: [
          { type: 'video', src: '/media/sensoricGlove.MOV', caption: 'Sensory glove demo' },
        ],
      },
      {
        title: 'High-Precision Measurement Board',
        tag: 'Measurement',
        period: '2023',
        summary:
          '4-layer board for high-precision analog measurement with network connectivity.',
        details: [
          '4-layer PCB with ATMega32U4 MCU, W5100 Ethernet controller',
          '32-bit high-precision ADS1263 ADC over SPI',
          'ESD protection for sensitive analog inputs',
          'DFM/DFA rules and factory (JLCPCB) coordination',
          'Debugged SPI bus with an oscilloscope',
        ],
      },
      {
        title: 'ED Machine (Electrical Discharge Machining)',
        tag: 'Power electronics',
        status: 'current',
        period: '2023 – present',
        summary:
          'Spark discharge generator for EDM, with galvanic isolation of the control logic from the power stage.',
        details: [
          'Development of a power discharge generator',
          'Galvanic isolation between control logic and power section',
          'Analog front-end design',
        ],
      },
      {
        title: 'Induction Heater Furnace',
        tag: 'Power electronics',
        status: 'current',
        period: '2025 – present',
        summary:
          'Induction heating furnace for metal processing, currently in development.',
        details: [
          'High-frequency induction heating power stage',
          'Power electronics design',
          'Currently working on',
        ],
      },
      {
        title: 'Inductor & Capacitor Meter',
        tag: 'Analog',
        period: '2023 – 2025',
        summary:
          'Analog device meter measuring inductance and capacitance based on the LC resonance circuit oscillation principle.',
        details: [
          'C-L meter based on the LC resonance circuit oscillation principle',
          'Precision analog design',
        ],
        media: [
          { type: 'image', src: '/media/LC_Tank.png', caption: 'LC tank circuit' },
          { type: 'video', src: '/media/LC_meter.MP4', caption: 'LC meter demo' },
        ],
      },
      {
        title: 'LIDAR',
        tag: 'Analog',
        status: 'current',
        period: '2023 – 2025',
        summary:
          'Modular LIDAR development for distance sensing, currently in progress.',
        details: [
          'Modular LIDAR development',
          'Precision analog design',
        ],
        media: [
          { type: 'video', src: '/media/LIDAR.mov', caption: 'LIDAR demo' },
        ],
      },
      {
        title: 'Raspberry Pi Colour-Tracking Robot',
        tag: 'Robotics',
        period: '2019 – 2020',
        summary:
          'Raspberry Pi robot built in high school, controlled wirelessly via Bluetooth from a custom Android app, that follows objects of a specific colour using servos and OpenCV.',
        details: [
          'Designed and built a 4-wheel chassis',
          'Object tracking with camera via OpenCV (C++/Python)',
          'Control via a custom Android application (Java)',
          'Wireless Bluetooth control from an Android Studio app',
          'Colour-following with servo motors via OpenCV',
        ],
        media: [
          { type: 'video', src: '/media/RaspberryPi_robot.mov', caption: 'Raspberry Pi robot demo' },
          { type: 'video', src: '/media/RaspberryPi_robot_2.mov', caption: 'Raspberry Pi robot follow-up' },
        ],
      },
    ],

    contact: {
      email: 'theodor.mounga@gmail.com',
      youtube: 'https://www.youtube.com/@Artificerofalltrades',
      location: 'Prague, Czech Republic',
      linkedin: 'Link',
    },
  },

  cz: {
    profile: {
      name: 'Theodor Mounga',
      role: 'Vývojář hardwaru a embedded systémů',
      location: 'Praha, Česká republika',
      email: 'theodor.mounga@gmail.com',
      youtube: 'https://www.youtube.com/@Artificerofalltrades',
      summary:
        'Inženýr mechatroniky se 3 lety komerční praxe v R&D a silným přesahem do vývoje vestavěného hardwaru i firmwaru. Mám praktické zkušenosti s kompletním návrhem vícevrstvých plošných spojů (od precizního analogu po high-speed DDR3L paměti), řízením dodavatelského řetězce (DFM/DFA), oživováním desek v laboratoři a rapid prototypingem. Hledám pozici Hardware / Embedded Engineer v mezinárodním R&D centru.',
    },

    skills: [
      {
        name: 'HW návrh a DPS',
        icon: 'pcb',
        items: [
          'Multi-layer PCB (4–6 vrstev)',
          'High-speed layout (DDR3L, impedance & length matching)',
          'Flex-PCB, ESD ochrany',
          'DFM / DFA',
          'KiCad, EasyEDA',
        ],
      },
      {
        name: 'Embedded a software',
        icon: 'chip',
        items: [
          'STM32MP157, STM32, ESP32-S3, AVR',
          'Komunikace: SPI, I2C, UART, CAN, ESP-NOW',
          'C, C++, Python, Git',
          'Základy Linuxu',
        ],
      },
      {
        name: 'Laboratoř a debugging',
        icon: 'osc',
        items: [
          'Oživování desek (bring-up)',
          'Osciloskop a logický analyzátor',
          'SMD pájení, fault-tracing',
          'Integrita signálu a napájení',
        ],
      },
      {
        name: 'CAD a prototypování',
        icon: 'cad',
        items: [
          'Fusion 360',
          'Blender (3D rendering)',
          '3D tisk (FDM, TPU, PLA)',
          'Rapid prototyping',
        ],
      },
    ],

    education: [
      {
        degree: 'Bakalář v oboru mechatronika',
        school: 'Vysoké učení technické v Brně (VUT)',
        faculty: 'Fakulta strojního inženýrství',
        period: '2020 – 2026',
        note: 'Státní závěrečná zkouška v červnu 2026',
        desc: 'Bakalářská práce: senzorická rukavice s bezdrátovou fúzí dat.',
      },
      {
        degree: 'Technické lyceum',
        school: 'SPŠS Betlémská, Praha',
        faculty: 'Střední průmyslová škola strojnická Betlémská',
        period: '2016 – 2020',
        desc: 'Střední škola zaměřená na strojírenství.',
      },
    ],

    experience: [
      {
        role: 'Výzkumný a vývojový pracovník (R&D)',
        company: 'UJP PRAHA a.s.',
        period: '2023 – 2026',
        points: [
          'High-Speed System-on-Module pro Embedded Linux: kompletní návrh 6vrstvé desky (STM32MP157, 512MB DDR3L).',
          'Signal & Power Integrity: DDR3L směrování (delay tuning / length matching, pravidlo S-3S), impedance (ETH, USB 2.0 High-Speed), BGA dog-bone.',
          'Integrace napájecího obvodu STPMIC, CAN bus, JTAG a testovacích pinů pro debugging v labu.',
          '4-vrstvá carrier board pro precizní měření (ATmega32U4, KSZ8863, 32-bit ADC ADS1263).',
          'Odladění SPI a I2C komunikace pomocí osciloskopu a logického analyzátoru.',
          'Návrh ESD ochrany, DFM/DFA pravidla a komunikace s čínskou továrnou (JLCPCB).',
        ],
      },
    ],

    projects: [
      {
        title: 'STM32MP157 Linux SoM',
        tag: 'High-speed PCB',
        period: '2024 – 2026',
        summary:
          'Vlastní 6vrstvá System-on-Module deska běžící na Linuxu, s 512MB DDR3L a plnou sadou periferií.',
        details: [
          '6vrstvý stackup (SIG | GND | SIG | PWR | GND | SIG) dle specifikace JLCPCB',
          '512MB DDR3L s delay tuningem (DQ / A / B) a roztečí S-3S',
          'Routing s kontrolou impedance: 50Ω single-ended, 100Ω diferenciální',
          'BGA escape routing metodou dog-bone',
          'Napájení: STPMIC s LDO a buck měničem',
          'Periferie: SPI, I2C, USB-C, CAN, UART, JTAG, GPIO, micro SD',
          'ESD ochrana podle selhání předchozích desek',
          'Deska pod 52×52 mm',
        ],
        media: [
          { type: 'image', src: '/media/stm32.png', caption: 'Deska STM32 SoM' },
          { type: 'image', src: '/media/som-ddr3l.jpg', caption: 'Delay tuning DDR3L' },
          { type: 'image', src: '/media/som-bga-dogbone.jpg', caption: 'BGA dog-bone breakout' },
        ],
      },
      {
        title: 'Nosná ETH + ADC deska',
        tag: 'Embedded',
        period: '2024 – 2026',
        summary:
          'Nosná deska pro SoM s 100 Mbps Ethernet přepínáním a 32-bitovým ADC pro přesné analogové měření.',
        details: [
          '4vrstvá deska s přepínačem KSZ8863MRLL (100 Mbps, 2× ETH)',
          '25 MHz krystal, převedený na 50 MHz',
          'PxLEDx piny nastaveny na (1,1) pro správný boot',
          '32-bitové ADS1263 s 10 analogovými piny a ESD ochranou',
          'Buck 24V → 5V a LDO 3V3',
          'Diferenciální párování a delay matching na ETH',
          'JTAG pro STM32MP157',
        ],
        media: [
          { type: 'image', src: '/media/carrier-eth.jpg', caption: 'Ethernet sekce' },
          { type: 'image', src: '/media/carrier-adc-side.jpg', caption: 'Analogová měřící strana' },
        ],
      },
      {
        title: 'Senzorická rukavice (Bakalářská)',
        tag: 'Výzkum',
        period: '2023 – 2024',
        summary:
          'Bezdrátová rukavice s vlastním PCB a více senzory pro snímání pohybu a interakce.',
        details: [
          'Vlastní PCB s ESP32-S3 a IMU MPU6050 (I2C), USB debugging',
          'Experimenty s Flex-PCB a senzory (piezo, Velostat, Hall) na test. stanici',
          'Tělo ve Fusion 360, 3D tisk (PLA, TPU)',
          'Real-time stream přes ESP-NOW do Unity',
        ],
        media: [
          { type: 'video', src: '/media/sensoricGlove.MOV', caption: 'Demo senzorické rukavice' },
        ],
      },
      {
        title: 'High-precision měřící deska',
        tag: 'Měření',
        period: '2023',
        summary:
          '4vrstvá deska pro vysoce přesné analogové měření s připojením do sítě.',
        details: [
          '4vrstvé PCB s ATmega32U4, Ethernet W5100',
          '32-bit ADS1263 ADC přes SPI',
          'ESD ochrana analogových vstupů',
          'DFM/DFA a koordinace s JLCPCB',
        ],
      },
      {
        title: 'ED Machine (Elektroerozivní)',
        tag: 'Výkonová elektronika',
        status: 'current',
        period: '2023 – současnost',
        summary:
          'Generátor výbojů pro EDM s galvanickým oddělením řídicí a silové části.',
        details: [
          'Vývoj výkonového generátoru výbojů',
          'Galvanické oddělení řídicí a silové části',
          'Návrh analogového front-endu',
        ],
      },
      {
        title: 'Indukční pec (Induction Heater)',
        tag: 'Výkonová elektronika',
        status: 'current',
        period: '2025 – současnost',
        summary:
          'Indukční pec pro ohřev kovů, aktuálně ve vývoji.',
        details: [
          'Výkonový stupeň pro indukční ohřev na vysoké frekvenci',
          'Návrh výkonové elektroniky',
          'Aktuálně na tom pracuji',
        ],
      },
      {
        title: 'Měřič indukčnosti a kapacity',
        tag: 'Analog',
        period: '2023 – 2025',
        summary:
          'Analogový přístroj na měření indukčnosti a kapacity na principu kmitání LC rezonančního obvodu.',
        details: [
          'Měřič C-L na principu LC rezonance',
          'Precizní analogový návrh',
        ],
        media: [
          { type: 'image', src: '/media/LC_Tank.png', caption: 'LC tank obvod' },
          { type: 'video', src: '/media/LC_meter.MP4', caption: 'Demo LC metru' },
        ],
      },
      {
        title: 'LiDAR',
        tag: 'Analog',
        status: 'current',
        period: '2023 – 2025',
        summary:
          'Vývoj modulárního LiDARu pro měření vzdálenosti, aktuálně ve vývoji.',
        details: [
          'Vývoj modulárního LiDARu',
          'Precizní analogový návrh',
        ],
        media: [
          { type: 'video', src: '/media/LIDAR.mov', caption: 'Demo LiDARu' },
        ],
      },
      {
        title: 'Robot Raspberry Pi (barevné sledování)',
        tag: 'Robotika',
        period: '2019 – 2020',
        summary:
          'Robot na Raspberry Pi postavený na střední škole, ovládaný bezdrátově přes Bluetooth z vlastní Android aplikace, sleduje objekt určité barvy pomocí servomotorů a OpenCV.',
        details: [
          'Konstrukce 4kolového podvozku',
          'Sledování objektů kamerou přes OpenCV (C++/Python)',
          'Řízení přes vlastní Android aplikaci (Java, Android Studio)',
          'Bezdrátové Bluetooth ovládání',
          'Sledování barevných objektů servomotory přes OpenCV',
        ],
        media: [
          { type: 'video', src: '/media/RaspberryPi_robot.mov', caption: 'Demo robota Raspberry Pi' },
          { type: 'video', src: '/media/RaspberryPi_robot_2.mov', caption: 'Raspberry Pi robot - druhá ukázka' },
        ],
      },
    ],

    contact: {
      email: 'theodor.mounga@gmail.com',
      youtube: 'https://www.youtube.com/@Artificerofalltrades',
      location: 'Praha, Česká republika',
      linkedin: 'Link',
    },
  },
}