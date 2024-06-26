export const setupHomePage = () => {
    const navigation = document.getElementById('navigation');
    const dropdown = document.getElementById('dropdown');
    const buttons = document.getElementById('buttons');
    const itemDisplay = document.getElementById('item-display');
    const dropdownMenuButton = document.getElementById('dropdownMenuButton');

    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.addEventListener('click', function() {
            currentNav = Number(item.dataset.id); 
            document.getElementById('dropdownButtonText').textContent = item.textContent;
            updateItemDisplay();

            var buttons = document.querySelectorAll('button[data-nav]');
            buttons.forEach(function(button) {
                var buttonNav = parseInt(button.dataset.nav, 10);
                button.disabled = (buttonNav === currentNav);
            });
        });
    });

    const updateNavigationView = () => {
    isMobile = window.innerWidth <= 768;
    if (isMobile) {
        dropdown.style.display = 'flex';
        buttons.style.display = 'none';
    } else {
        dropdown.style.display = 'none';
        buttons.style.display = 'flex';
    }
    };

    const updateItemDisplay = () => {
        console.log(currentNav);
        let content = '';
        if (currentNav === 1) {
            content = `
            <div class='item-container'>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">SCADA</h5>
                    <p class="card-text">See how PLN implements centralized system that monitors and controls electrical infrastructure across the country.</p>
                </div>
                </div>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">DMS/ADMS</h5>
                    <p class="card-text">DMS/ADMS integrates various functionalities to monitor, analyze, and control the distribution of electricity across PLN's network. It provides real-time data on network performance, including voltage levels, current flows, and equipment status.</p>
                </div>
                </div>
            </div>
            <a class='button-2' id="see-more-button" href="/smartgrid/automated-monitoring-control">See More</a>`;
        } else if (currentNav === 2) {
            content = `
            <div class='item-container'>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Smart Meter Coverage</h5>
                    <p class="card-text">Smart meters are advanced devices that replace traditional electromechanical meters, offering enhanced functionality and capabilities for both consumers and utility providers.</p>
                </div>
                </div>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Data Analytics Application</h5>
                    <p class="card-text">See which application PLN is using to manage data and get insights from it</p>
                </div>
                </div>
            </div>
            <a class='button-2' id="see-more-button" href="/smartgrid/data-analytics">See More</a>`;
        } else if (currentNav === 3) {
            content = `
            <div class='item-container'>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">SAIDI</h5>
                    <p class="card-text">See how measure the average duration of interruptions experienced by customers over a specific period of time within its distribution network.</p>
                </div>
                </div>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">SAIFI</h5>
                    <p class="card-text">See how measure the average number of interruptions experienced by customers over a specific period within PLN's distribution network.</p>
                </div>
                </div>
            </div>
            <a class='button-2' id="see-more-button" href="/smartgrid/supply-reliability">See More</a>`;
        } else if (currentNav === 4) {
            content = `
            <div class='item-container'>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Management of DER Integration</h5>
                    <p class="card-text">Strategies and technologies employed to integrate and efficiently manage decentralized or distributed energy resources within its electricity grid.</p>
                </div>
                </div>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Grid Scale Energy Storage</h5>
                    <p class="card-text">Stabilizing the grid, managing peak demand periods, integrating renewable energy sources, and enhancing overall reliability and efficiency of the electricity supply network.</p>
                </div>
                </div>
            </div>
            <a class='button-2' id="see-more-button" href="/smartgrid/distributed-energy-resources-integration">See More</a>`;
        } else if (currentNav === 5) {
            content = `
            <div class='item-container'>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Renewable Energy Penetration</h5>
                    <p class="card-text">Share or percentage of total electricity generation derived from renewable sources within a Indonesia region energy mix.</p>
                </div>
                </div>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">EV Facilitation</h5>
                    <p class="card-text">Support the adoption and integration of electric vehicles (EVs) within the country. This includes developing infrastructure, providing incentives, and ensuring reliable electricity supply for EV charging needs.</p>
                </div>
                </div>
            </div>
            <a class='button-2' id="see-more-button" href="/smartgrid/green-energy">See More</a>`;
        } else if (currentNav === 6) {
            content = `
            <div class='item-container'>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">IT Cyber Security</h5>
                    <p class="card-text">See how we protect our information technology systems and data from cyber threats, unauthorized access, and other security risks.</p>
                </div>
                </div>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">OT Cyber Security</h5>
                    <p class="card-text">See how we monitor and control industrial processes, including electricity generation, transmission, and distribution. Ensuring the security of these systems is critical to maintaining the reliability, safety, and efficiency of Indonesia’s electrical grid.</p>
                </div>
                </div>
            </div>
            <a class='button-2' id="see-more-button" href="/smartgrid/cyber-security-measures">See More</a>`;
        } else if (currentNav === 7) {
            content = `
            <div class='item-container'>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Realtime Data to Customer</h5>
                    <p class="card-text">See how we provide customers with real-time information about their electricity usage, billing, and service status. This transparency aims to enhance customer engagement, promote energy efficiency, and improve overall customer satisfaction.</p>
                </div>
                </div>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Customer Satisfaction Feedback</h5>
                    <p class="card-text">See how we collect, analyze, and respond to feedback from our customers.</p>
                </div>
                </div>
            </div>
            <a class='button-2' id="see-more-button" href="/smartgrid/customer-empowerment-and-satisfaction">See More</a>`;
        } else if (currentNav === 8) {
            content = `
            <div class='item-container'>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Journals</h5>
                    <p class="card-text">Explore how we empower customers with real-time insights into their electricity usage, billing, and service status. This transparency fosters customer engagement, encourages energy efficiency, and boosts overall customer satisfaction.</p>
                </div>
                </div>
                <div class="card-2">
                <div class="card-body">
                    <h5 class="card-title">Related Documents</h5>
                    <p class="card-text">Discover our methods for gathering, analyzing, and acting on customer feedback.</p>
                </div>
                </div>
            </div>
            <a class='button-2' id="see-more-button" href="/smartgrid/journal">See More</a>`;
        }

        itemDisplay.innerHTML = content;
        console.log(currentNav, content);
        if (content) {
            const seeMoreButton = document.getElementById('see-more-button');
            seeMoreButton.addEventListener('click', handleSeeMoreClick);
        }   
    };

    const handleButtonClick = (e) => {
        const clickedButton = e.target;
        currentNav = parseInt(clickedButton.dataset.nav, 10);
        if (currentNav <= 8 && currentNav >= 1) {
            updateItemDisplay();
            const allButtons = buttons.querySelectorAll('button');
            allButtons.forEach(button => button.disabled = false);
            clickedButton.disabled = true;
            
            document.getElementById('dropdownButtonText').textContent = clickedButton.textContent;
        }
    };

    const handleSeeMoreClick = () => {
    window.scrollTo(0, 0);
    const urls = [
        '/automated-monitoring-control',
        '/data-analytics',
        '/supply-reliability',
        '/distributed-energy-resources-integration',
        '/green-energy',
        '/cyber-security-measures',
        '/customer-empowerment-and-satisfaction'
    ];
    window.location.href = urls[currentNav - 1];
    };

    updateNavigationView();
    updateItemDisplay();

    window.addEventListener('resize', updateNavigationView);
    buttons.addEventListener('click', handleButtonClick);
    buttons.querySelectorAll('button')[0].disabled = true;
}