import React, { Fragment } from 'react';


function GetInstallationGuide() {
    return (
        <Fragment>
            <div>
                <h1>Installing</h1>
                <h2>Toolbox</h2>
                <p>If you're downloading Nexus Dynamics from the creator store, follow these instructions:</p>
                <br />
                <div class="line"><div class="step">1</div><p><b>Download</b> the model from the <a href="https://create.roblox.com/store/asset/116788591431002/Nexus-Dynamics-20">creator store</a>.</p></div>
                <div class="line"><div class="step">2</div><p><b>Open Toolbox</b> in Roblox Studio by going to <b>Home → Toolbox</b></p></div>
                <div class="line"><div class="step">3</div><p><b>Find</b> and insert <b>Nexus Dynamics</b> and into workspace.</p></div>
                <br /><br />
                {/* <h2>Github</h2>
                <p>If you're downloading Nexus Dynamics from github, follow these instructions:</p>
                <br />
                <div class="line"><div class="step">1</div><p><b>Download</b> the rbxm file from <a href="#">github</a>.</p></div>
                <div class="line"><div class="step">2</div><p><b>Open Explorer</b> in Roblox Studio by going to <b>Window → Explorer</b></p></div>
                <div class="line"><div class="step">3</div><p><b>Right-click</b> workspace and <b>Insert from File</b></p></div>
                <div class="line"><div class="step">4</div><p><b>Select</b> the file you downloaded and press <b>Open</b></p></div> */}
            </div>
            <br />
            <div>
                <h1>Configuring</h1>
                <h2>Game Settings</h2>
                <p>For Nexus Dynamics to work properly, we need to enable all the security options being used:</p>
                <br />
                <div class="line"><div class="step">1</div><p><b>Open Game Settings</b> in Roblox Studio by going to <b>File → Game Settings</b></p></div>
                <div class="line"><div class="step">2</div><p>Within this page, direct to the <b>Security</b> section.</p></div>
                <div class="line"><div class="step">3</div><p><b>Enable</b> all the options available and press <b>Save</b></p></div>
                <br /><br />
                <h2>Administrative Tools</h2>
                <p>We offer you the ability to store and use tools in-game by adding them to <b>Nexus Dynamics → Customs → Tools</b></p>
                <br /><br />
                <h2>Ranking</h2>
                <p>You can watch the <a href="#">Setup for Nexus Dynamics</a> for a guide on how to rank administrators.</p>
                <br /><br />
                <h2>Custom Commands</h2>
                <p>You can watch the <a href="#">How to add custom commands</a> video for a guide on how to create custom commands.</p>
            </div>
        </Fragment>
    );
}

export default GetInstallationGuide