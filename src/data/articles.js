import React from "react";
import image from "../Articles/ControlNet.png";
import CodeBlock from "react-copy-code";

function article_1() {
	return {
		date: "30 May 2023",
		title: "Website using React and Netlify.",
		description:
			"Here you will read about my journey of creating a portfolio website using React and hosting it on AWS S3.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					display: block;
					margin-left: auto;
					align-self: center;
					outline: 2px solid red;
					width: 80%;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
							For a while now, I desired to have a personal
							website. I thought of using Wordpress, but, as a
							developer, I wanted to have learn new technology and
							get more control over the website. I tried bootstrap
							and ASP.NET, but I was not satisfied with the
							functionality. Then I came across React and I was
							amazed by its simplicity and functionality.
						</p>
						<p>
							First step was to learn React. I started with
							tutorials and even bought a course in React +
							Typescript.
						</p>
						<p>
							Then I searched for some examples of portfolio
							websites and came across a wonderfull website{" "}
							<a href="https://reactjsexample.com/">
								https://reactjsexample.com/
							</a>{" "}
							where developers share their projects. I got the
							inspiration for my website from the developer
							Tharindu N. Madusanka and created my own.
						</p>
						<p>
							Then I started to think about hosting. It tured out
							simple to host it on Netlify and now, the next step
							is to add Google Analythics.
						</p>
						<p>
							{" "}
							Netlify is a great hosting platform. It is free and
							easy to use.{" "}
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "27 August 2023",
		title: "Stable diffusion on Google Cloud for free.",
		description:
			"Step by step instruction on how install stable diffusion UIs on GCP and abuse the 300$ free credit that goofgle is giving out for newly registered users. Create images and train models, like a boss.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.article-img {
					align-self: center;
					outline: 2px solid grey;
					display: inline-block;
					overflow: hidden;
					width: 60%;
				}

				.picture-text {
					text-align: center;
					font-size: 0.8em;
					color: grey;
					width: 60%;
				}
				.Code {
					font-family: sans-serif;
					padding: 1%;
					background-color: #040D12;
					color: #93B1A6;
					font-size: 0.75em;
					outline: 5px solid #5C8374;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
							Unless you have lived under a rock for the past 2
							years, you probably have heard about generative
							models. They are the new hype in the AI community.
							They are used to generate images, videos, music,
							text, etc.
						</p>
						<p>
							I spent this year experimenting with generative
							models for image generation and want to share my
							experience with you. In this step by step guide you
							will learn, how to create a VM with hardware, that
							would cost you thousands of dollars, if you were to
							create similar setup at home. Then you will learn
							how to configure this VM and install all the
							necessary software on it to launch{" "}
							<a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui">
								AUTOMATIC1111
							</a>{" "}
							and{" "}
							<a href="https://github.com/bmaltais/kohya_ss">
								Kohya
							</a>{" "}
							GUIs.
						</p>
						<p>
							Then I will show you how to install necessary
							extensions, that will give you much more control of
							what you are creating.
						</p>
					</div>
					{
						<img
							src={image}
							alt="What is possible with stable diffusion"
							className="article-img"
						/>
					}

					<div class="picture-text">
						Controlnet guided generated image of a dragon. <br />
						<b>Prompt:</b> (red dragon, black wings, purple eyes,
						big teeth , black tongue) crawling on the mountain ,soft
						light, cinematic light, masterpiece
					</div>
				</div>
				<h1>Step 1: Create a VM in GCP</h1>
				<p>
					{" "}
					First you need to create a google cloud{" "}
					<a href="https://cloud.google.com/">account</a>.{" "}
				</p>
				<p>
					{" "}
					At the moment of writing this article, google gives 300$ if
					credits for 3 months for newely registered users.
				</p>
				<h2> Step 1.1: Create a VM</h2>
				<p>
					After creating account and heeading to the main page, head
					over to Compute Engine-&#62;VM instances-&#62;
					<a href="https://console.cloud.google.com/compute/instancesAdd">
						CREATE INSTANCE
					</a>
				</p>
				<p> Create a VM with the following parameters: </p>
				<ul>
					<li>
						Region and zone: (<b>Note:</b> different regions and
						zones have different GPUs available, so select the one
						that has the GPU you want)
					</li>
					<li>Machine configuration:GPUs </li>
					<li>Machine type: n1-standard-8 (8 vCPUs, 30 GB memory)</li>
					<li>
						Boot disk: Deep Learning VM with CUDA 11.8 M110 (
						<b>Note:</b> You will be automatically offfered to swith
						to this image)
					</li>
					<li>Firewall: Allow HTTP traffic</li>
					<li>Firewall: Allow HTTPS traffic</li>
					<li>Size (GB): 100+</li>
				</ul>
				<p>Click Create and wait for the VM to be created.</p>
				<p>
					{" "}
					<font color="red">
						It might happen that the region/zone you have selected
						doesn't have the resources you selected. Then you will
						receive a notification in the red circle in the red top
						corner.
					</font>
				</p>
				<h2> Step 1.2: Request quotas </h2>
				<p>
					Now, that you have created a VM and you can see it in the
					list, you will need to request quotas. Google cloud requers
					you to request the quotas for using certain resources, such
					as expensive GPUs. To do that, you will need to press
					request quotas button next to your VM and follow the
					instruction.
				</p>
				<h2>Step 1.3: Firewall settings</h2>
				<p>
					{" "}
					Now you need to configure firewall settings, so that only
					you will be able to use the GUI.
				</p>
				<p>
					<ol>
						<li>
							{" "}
							Head over to VPC network-&#62;Firewall-&#62;
							<a href="https://console.cloud.google.com/net-security/firewall-manager/firewall-policies/add">
								CREATE FIREWALL RULE
							</a>{" "}
						</li>
						<li>
							{" "}
							Enter the following parameters:
							<ul>
								<li>
									Target tags: http-server; https-server;
									sd-web-ui;
								</li>
								<li>
									Protocols and ports: Specified protocols and
									ports: TCP: 7860-7869
								</li>
								<li>
									Source IPv4 ranges: ask google "what is my
									ip"
								</li>
							</ul>
						</li>
						Enter the name and description and press create.
						<li>
							Go back to VM instances and click on your VM. Then
							press edit. Then, at the Network tags, enter the
							tags we have used in the previous step: http-server;
							https-server; sd-web-ui; and press save.
						</li>
					</ol>
				</p>
				<p> Now your VM is only accessible from the internet by you.</p>

				<h1>Step3: Install software</h1>
				<p>
					Now it is time for you to install all the necessary
					software.
					<br />
					Start your VM and wait until it is ready. Then press SSH and
					you will be redirected to the terminal of your VM. <br />
					When asked to install nvidia drivers, say no.
				</p>
				<h2>Step3.1: Install prerequisits</h2>
				<p>
					First you need to install necessary libraries, through the
					shell. They will be required later for things like
					installing GUIs, building pyhton, etc.
				</p>

				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`sudo apt-get install gdebi-core
sudo apt-get install tk-dev
sudo apt-get build-dep python
sudo apt-get -y install libgdbm-dev libsqlite3-dev libssl-dev zlib1g-dev
sudo apt-get -y install liblzma-dev lzma libbz2-dev libffi-dev
sudo apt-get build-dep python`}
						</code>
					</pre>
				</CodeBlock>
				<p> Install python 3.10.10 from source. </p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`export PYTHON_VERSION=3.10.10
export PYTHON_MAJOR=3

curl -O https://www.python.org/ftp/python/\${PYTHON_VERSION}/Python-\${PYTHON_VERSION}.tgz
tar -xvzf Python-\${PYTHON_VERSION}.tgz
cd Python-\${PYTHON_VERSION}

# add this to rebuild python
./configure \\
    --prefix=/opt/python/\${PYTHON_VERSION} \\
    --enable-shared \\
    --enable-optimizations \\
    --enable-ipv6 \\
    LDFLAGS=-Wl,-rpath=/opt/python/\${PYTHON_VERSION}/lib,--disable-new-dtags

make
sudo make install

curl -O https://bootstrap.pypa.io/get-pip.py
sudo /opt/python/\${PYTHON_VERSION}/bin/python\${PYTHON_MAJOR} get-pip.py

/opt/python/\${PYTHON_VERSION}/bin/python\${PYTHON_MAJOR} --version`}
						</code>
					</pre>
				</CodeBlock>
				<p> Then add the path to the .profile </p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`export "PATH=/opt/python/3.10.10/bin/:$PATH"
alias python="/opt/python/3.10.10/bin/python3.10"
source .profile`}
						</code>
					</pre>
				</CodeBlock>
				<p> Install NVIDIA drivers</p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`curl https://raw.githubusercontent.com/GoogleCloudPlatform/compute-gpu-installation/main/linux/install_gpu_driver.py \\
  --output install_gpu_driver.py
sudo /opt/deeplearning/install-driver.sh`}
						</code>
					</pre>
				</CodeBlock>
				<h2>Step3.2: Install GUIs</h2>
				<p> First install stable diffusion AUTOMATIC1111 GUI. </p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`bash <(wget -qO- https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh) \\
  --listen --enable-insecure-extension-access`}
						</code>
					</pre>
				</CodeBlock>
				<p> Then add a dependency: </p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`LD_LIBRARY_PATH=/usr/local/lib
export LD_LIBRARY_PATH`}
						</code>
					</pre>
				</CodeBlock>

				<p> Then install Kohya GUI. </p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`git clone https://github.com/bmaltais/kohya_ss.git
cd kohya_ss
chmod +x ./setup.sh
./setup.sh`}
						</code>
					</pre>
				</CodeBlock>
				<p>
					{" "}
					<b>Configurations! </b> Now you have installed both GUIs,
					that will be necessary for you to create images. Now you can
					launch them.
				</p>
				<p>
					{" "}
					To launch AUTOMATIC1111 or Kohya, go to the
					stable-diffusion-webui directory and run:{" "}
				</p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`# AUTOMATIC1111
./webui.sh --listen --enable-insecure-extension-access --xformers

# Kohya
./gui.sh --headless --listen 0.0.0.0`}
						</code>
					</pre>
				</CodeBlock>
				<p>
					{" "}
					Now you can access the GUIs from your browser. To that, go
					to your VMs and copy "External IP", then enter it into the
					browser as x.x.x.x:7860, where x.x.x.x is external ip. <br />
					<font color="red">
						Note: you will need to add the port number 7860, because it is the port,
						that the GUIs are listening to. <br />
						If you you opened both GUIs, then you will need to use different 7860 and 7861 ports for
						the first and second GUIs in respective opening order.
					</font>
				</p>
				<h1>Step4: Install extensions</h1>
				<h1>Step5: Launch GUIs and create</h1>
				<h1>Step6: Usefull links</h1>
			</React.Fragment>
		),
	};
}


const myArticles = [article_2, article_1];

export default myArticles;
