const servicesData = [
    {
        id: 1,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l3.75-3.75m0 0L11.25 6l3.75 3.75M7.5 9.75L11.25 13.5m0-3.75L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25h.008v.008h-.008v-.008zM8.25 17.25h.008v.008H8.25v-.008zM12 17.25h.008v.008H12v-.008zM5.25 10.5H18.75"></path></svg>,
        name: "PLC based Control Panel",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service1.jpg`,
        description:
            "A PLC (Programmable Logic Controller) based control panel is an electronic control system used to automate industrial processes.",
        detailedDescription: [
            "It typically consists of a PLC, input/output modules, communication modules, power supply, and other components. The PLC is a digital computer that is programmed to control the operation of machines and other industrial equipment. The input/output modules are used to connect the PLC to sensors, switches, and other devices that provide input to the system. The communication modules enable the PLC to communicate with other control systems and computers.",
            "PLC-based control panels are commonly used in manufacturing plants, factories, and other industrial settings. They can be programmed to perform a wide range of tasks, such as controlling the operation of machines, monitoring and controlling the temperature, pressure, and flow of materials, and detecting and diagnosing faults in the system.",
            "One of the benefits of using a PLC-based control panel is that it provides greater flexibility than traditional hardwired control systems. Changes to the process can be made easily by reprogramming the PLC, without the need to rewire the entire system. This can save time and money, as well as reducing the risk of errors and downtime.",
            "Overall, PLC-based control panels are an important tool for automation and control in modern manufacturing and industrial environments, providing greater efficiency, accuracy, and flexibility in controlling and monitoring industrial processes."
        ],
    },
    {
        id: 2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l-1.41-.513M3 10.5h1.5m13.5 0H21M12 3v1.5m0 15V21m-6.923 3.077l.707-.707M18.923 3.077l-.707.707"></path></svg>,
        name: "Drive based Control Panel",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service2.jpg`,
        description:
            "A drive-based control panel is an electronic system used to regulate and control the operation of electrical drives in industrial applications.",
        detailedDescription: [
            "A drive-based control panel is an electronic control system used to regulate and control the operation of electrical drives. Electrical drives are used to convert electrical energy into mechanical energy, and are used in a wide range of applications, including pumps, fans, and conveyor belts. The control panel typically consists of a programmable logic controller (PLC), input/output modules, communication modules, and a drive controller.",
            "The drive controller is the central component of the drive-based control panel, and is used to regulate the speed and torque of the drive. The input/output modules are used to connect the PLC to sensors and other devices that provide input to the system. The communication modules enable the PLC to communicate with other control systems and computers.",
            "Drive-based control panels are commonly used in manufacturing plants, factories, and other industrial settings where electrical drives are used. They can be programmed to perform a wide range of tasks, such as controlling the speed and torque of the drive, monitoring and controlling the temperature and pressure of the system, and detecting and diagnosing faults in the system.",
            "One of the benefits of using a drive-based control panel is that it provides greater accuracy and efficiency in controlling the operation of electrical drives. This can result in reduced energy consumption, increased productivity, and improved product quality. In addition, drive-based control panels can be programmed to perform a range of safety functions, such as emergency stop and over-temperature protection, which can help to reduce the risk of accidents and downtime.",
            "Overall, drive-based control panels are an important tool for automation and control in modern manufacturing and industrial environments, providing greater accuracy, efficiency, and safety in the operation of electrical drives."
        ]
    },
    {
        id: 3,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 14.25L10.5 7.5l3 3L20.25 3M3.75 3H20.25"></path></svg>,
        name: "PLC & DCS Programming",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service3.jpg`,
        description:
            "Programming solutions for PLC and DCS systems to control and automate complex industrial processes.",
        detailedDescription: [
            "PLC (Programmable Logic Controller) and DCS (Distributed Control System) are two common types of control systems used in industrial automation. Both PLC and DCS are used for automating industrial processes, but there are some differences between them.",
            "PLC is a digital computer designed to control machinery and automate production lines. PLCs are typically used in discrete manufacturing, where the process is divided into distinct steps or stages. PLC programming is done using ladder logic, a graphical programming language made up of rungs, each with one or more instructions executed in sequence.",
            "DCS, on the other hand, is a control system designed for large-scale industrial processes that require continuous control, such as chemical plants or power generation facilities. DCS programming involves both graphical and textual languages and typically includes configuring and tuning PID (Proportional Integral Derivative) controllers.",
            "In terms of programming, PLCs are generally easier to program due to simpler logic, while DCS systems offer more advanced and scalable control capabilities for complex industrial needs.",
            "Ultimately, the decision to use PLC or DCS depends on specific application requirements such as system complexity, control precision, budget, and scalability."
        ]
    },
    {
        id: 4,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path></svg>,
        name: "Motion Control Programming & Configuration",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service4.jpg`,
        description:
            "Precision control of machinery using advanced motion control hardware and programming techniques.",
        detailedDescription: [
            "Motion control programming and configuration involves using specialized hardware and software to manage the movement of machines and equipment in industries like manufacturing, robotics, and automation.",
            "Define the system requirements: Start by identifying required motors, sensors, desired precision, and other performance expectations.",
            "Select the hardware: Choose motors, drives, encoders, and controllers based on the application needs.",
            "Install and configure the hardware: Connect and configure all components following manufacturer specifications.",
            "Choose the programming language: Options include Ladder Logic, Structured Text, or C++ depending on the system and flexibility needed.",
            "Develop the program: Write the control logic using a suitable IDE to direct how the system moves and behaves.",
            "Test and debug the program: Simulate and run tests to validate behavior and ensure safe operation.",
            "Optimize the program: Fine-tune PID values and logic to achieve desired performance, reliability, and precision.",
            "Motion control systems enhance precision, safety, and automation. Contact Atech Solutions to implement a tailored motion control solution for your operations."
        ]
    },
    {
        id: 5,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12C6 7.029 10.029 3 15 3s9 4.029 9 9-4.029 9-9 9S6 16.971 6 12zm0 0H3m3 0a3 3 0 10-6 0 3 3 0 006 0zm12-6.75V12m0 6.75V12M12 21V12m0-6.75V12"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5H17.25M6.75 16.5H17.25"></path></svg>,
        name: "PCC, MCC, APFC & DC Synchronizing Panel",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service5.jpg`,
        description:
            "Industrial-grade panels for power control, motor management, power factor correction, and DC source synchronization.",
        detailedDescription: [
            "PCC, MCC, APFC, and DC Synchronizing Panels are essential for managing power distribution, motor control, energy efficiency, and continuous power supply in industrial applications.",
            "PCC (Power Control Center) Panel: Used for distributing and controlling power across substations in large industrial plants. Ensures efficient and organized power flow.",
            "MCC (Motor Control Center) Panel: Controls electric motors with integrated motor starters, circuit breakers, and safety devices to manage and protect motor operations.",
            "APFC (Automatic Power Factor Correction) Panel: Enhances electrical efficiency by automatically managing capacitors to correct power factor based on load demand, reducing energy bills and improving system performance.",
            "DC Synchronizing Panel: Ensures stable and synchronized operation of multiple DC sources like batteries or generators, especially critical in hospitals, data centers, and backup systems.",
            "These panels are custom-designed with precision, incorporating components like breakers, fuses, meters, and relays to ensure optimal performance and safety.",
            "Partner with Atech Solutions to implement reliable and expertly engineered PCC, MCC, APFC & DC Synchronizing Panels tailored to your industrial needs."
        ]
    },
    {
        id: 6,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.75 20.25h-.008v.008H12.75v-.008z"></path></svg>,
        name: "Distributor IO Control Panel",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service6.jpg`,
        description:
            "Centralized panel for managing input/output signals in complex industrial automation environments.",
        detailedDescription: [
            "A Distributor IO Control Panel (DIOCP) serves as a centralized hub for managing input and output signals from various industrial devices and systems.",
            "It is particularly effective in environments where multiple devices—like sensors and actuators—must be connected and coordinated, such as in manufacturing, process automation, and control plants.",
            "The panel contains modular input/output modules, power supplies, communication interfaces, and processing units to ensure seamless control and signal flow.",
            "Input modules gather data from field sensors, while output modules send commands to actuators, valves, or relays, ensuring precise system behavior.",
            "The panel supports configuration and programming using industrial software tools, offering flexibility in logic design, alarms, data routing, and communication protocols.",
            "Designed for scalability and customization, DIOCPs support future expansion without redesigning the entire control architecture.",
            "With Atech Solutions' Distributor IO Control Panels, industries benefit from efficient, adaptable, and reliable control systems tailored to specific operational needs."
        ]
    },
    {
        id: 7,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.52.832 1.464 1.433 2.504 1.433h.004a2.5 2.5 0 002.5-2.5v-.004a2.5 2.5 0 00-2.5-2.5h-.004a2.5 2.5 0 00-2.5 2.5v.004c0 1.04.601 1.984 1.433 2.504l-3.03 2.496m0 0l-4.68-4.68a2.25 2.25 0 00-3.182 0l-2.074 2.074a2.25 2.25 0 000 3.182l4.68 4.68m3.54-3.54z"></path></svg>,
        name: "System Upgradation / Retrofitting",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service7.jpg`,
        description:
            "Modernize your existing control systems through expert upgradation and retrofitting solutions.",
        detailedDescription: [
            "System upgradation or retrofitting involves enhancing existing industrial systems by integrating new components, hardware, or software to improve efficiency, functionality, and performance.",
            "We begin by evaluating your current setup—identifying performance gaps, outdated technologies, and opportunities for improvement.",
            "Our team then defines clear upgrade goals based on your process needs, whether it's increasing automation, improving safety, or enabling remote access.",
            "A structured project plan is created, including timeline, scope, budget, and risk mitigation strategies to ensure smooth execution with minimal disruption.",
            "We select the latest compatible hardware and software solutions from reputed brands, ensuring seamless integration with your existing infrastructure.",
            "New components are installed and configured, and if required, we develop or upgrade software logic to reflect enhanced functionality.",
            "After installation, we conduct rigorous testing and validation to ensure the upgraded system meets all requirements and delivers optimized performance.",
            "Atech Solutions offers turnkey retrofitting and upgradation services that help extend your system's lifespan, reduce maintenance costs, and align with industry 4.0 standards."
        ]
    },
    {
        id: 8,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 14.25L10.5 7.5l3 3L20.25 3M3.75 3H20.25"></path></svg>,
        name: "SCADA Based Control Panel",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service8.jpg`,
        description:
            "Reliable SCADA panels for centralized monitoring and control of industrial processes.",
        detailedDescription: [
            "SCADA (Supervisory Control and Data Acquisition) based control panels are designed to monitor and control complex industrial systems from a centralized location.",
            "These panels integrate with PLCs, HMIs, sensors, and actuators to provide real-time data visualization and system management.",
            "SCADA panels display key process parameters like temperature, pressure, flow, and status alerts—enabling operators to take immediate corrective actions.",
            "They are essential for industries requiring 24/7 monitoring, with configurable alarms and historical data logging for analysis and troubleshooting.",
            "Our SCADA panels are built to be user-friendly, scalable, and secure, with compatibility across popular SCADA platforms like Wonderware, WinCC, and InduSoft.",
            "At Atech Solutions, we offer custom-designed SCADA control panels that ensure safe, efficient, and intelligent control for your plant or facility."
        ]
    },
    {
        id: 9,
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.75 20.25h-.008v.008H12.75v-.008z"></path></svg>,
        name: "Networking & IIOT",
        imgUrl: `${process.env.REACT_APP_BASE_URL}/assets/img/services/service9.jpg`,
        description:
            "Connect your industrial assets with smart networking and IIOT infrastructure for real-time insights.",
        detailedDescription: [
            "Networking & Industrial Internet of Things (IIOT) enables interconnectivity between machines, sensors, and systems for seamless data sharing and automation.",
            "We deploy robust wired and wireless networking solutions using technologies such as Ethernet, Modbus, Profibus, Wi-Fi, and more.",
            "Our IIOT systems connect your industrial devices to the cloud, enabling real-time data collection, predictive maintenance, and advanced analytics.",
            "Common protocols we support include MQTT, OPC-UA, BACnet, and custom industrial gateways for secure device communication.",
            "We use Bluetooth and Cellular connectivity for remote or mobile sensor integration, perfect for harsh environments or distributed plants.",
            "Atech Solutions provides end-to-end support for designing, implementing, and maintaining secure, scalable, and efficient IIOT and networking infrastructure tailored to your operations."
        ]
    }
];

export default servicesData;