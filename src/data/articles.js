import React from "react";
import CodeBlock from "react-copy-code";

// Images
import ControlNetExampleImg from "../Articles/ControlNet.png";
import AccelerationSetup from "../Articles/AccelerationSetup.png";
import RequestQuota from "../Articles/RequestQuota.png";
import Smoking from "../Articles/smoking.png";
import ControlSmoke from "../Articles/ControlNetSmoke.png";
import Result from "../Articles/result.png";
import Preview from "../Articles/preview.png";

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
		title: "3000$ worth Stable Diffusion setup on Google Cloud for free.",
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
					width: 100%;
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
				.Prompt {
					font-family: sans-serif;
					padding: 1%;
					background-color: #F0F0F0;
					color: #000000;
					font-size: 0.8em;
					outline: 5px solid #FFC6AC;
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
							src={ControlNetExampleImg}
							alt="What is possible with stable diffusion"
							className="article-img"
							style={{
								width: "80%",
							}}
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
					<img
						src={RequestQuota}
						alt="Request quotas notification screenshot"
						className="article-img"
						style={{
							width: "60%",
						}}
					/>
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
							{`sudo apt-get update && sudo apt-get upgrade
sudo apt-get install gdebi-core git-lfs
sudo apt-get install tk-dev
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
cd ..
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
				<p>
					{" "}
					Stable diffusion has many GUIs for different purposes:
					<ul>
						<li>
							AUTOMATIC1111 - for image creation and model
							training
						</li>
						<li>Kohya - best for Lora trining</li>
						<li>
							ComfyUI - not so comfy and confusing tool for what
							can be done with AAUTOMATIC1111
						</li>
						<li>and more ...</li>
					</ul>
				</p>
				<p>
					{" "}
					We are going to install AUTOMATIC1111 and Kohya. First
					install stable diffusion AUTOMATIC1111 GUI.{" "}
				</p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`wget -q https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh
chmod +x webui.sh
./webui.sh`}
						</code>
					</pre>
				</CodeBlock>
				<p> Then stop the process with CTRL+C and type: </p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>{`nano stable-diffusion-webui/webui-user.sh`}</code>
					</pre>
				</CodeBlock>
				<p> and uncomment following lines: </p>
				<ul>
					<li># export ACCELERATE="True"</li>
					<li># export NO_TCMALLOC="True"</li>
				</ul>
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
					Affter the installation is done, press CTRL+C to stop the
					process. Then go to the kohya_ss directory and run the
					following commands:
				</p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>
							{`source venv/bin/activate
accelerate config`}
						</code>
					</pre>
				</CodeBlock>
				<p>
					Then you will need to setup acceleration parameters. Answer
					as shown in the picture.
				</p>
				<img
					src={AccelerationSetup}
					alt="Acceleration setup choices - screenshot"
					className="article-img"
				/>
				<p>
					{" "}
					Restart the machine to avoid errors, and{" "}
					<b>configurations! </b> Now you have installed both GUIs,
					that will be necessary for you to create images and train
					the models. Now you can launch them.
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
					browser as x.x.x.x:7860, where x.x.x.x is external ip.{" "}
					<br />
					<font color="red">
						Note: you will need to add the port number 7860, because
						it is the port, that the GUIs are listening to. <br />
						If you you opened both GUIs, then you will need to use
						different 7860 and 7861 ports for the first and second
						GUIs in respective opening order.
					</font>
				</p>
				<h1>Step4: Install extensions</h1>
				<p>
					Now you need to install extensions for AAUTOMATIC1111.{" "}
					<br />
					To do that:
					<ol>
						<li>Launh AUTOMATIC1111 GUI </li>
						<li>Go to the Extensions tab </li>
						<li>Press "Available" </li>
						<li>In "Extension index URL" leave the existing URL</li>
						<li>Press "Load from"</li>
						<li>
							Install following extensions and restart UI through
							Settings-&gt;Reload UI:{" "}
							<ul>
								<li>
									<b>stable-diffusion-webui-images-browser</b>{" "}
									- The most important tool. Keeps the history
									of your images with prompts{" "}
								</li>
								<li>
									<b>sd-civitai-browser-plus</b> - lets you
									get models, Loras and textual inversions
									easier
								</li>
								<li>
									<b>sd-webui-controlnet</b> - This tool will
									allow you to guide the image shapes and
									compositions. <br />
									To install it, go to the ControlNet{" "}
									<a href="https://github.com/Mikubill/sd-webui-controlnet">
										repo
									</a>{" "}
									and follow the instructions.
									<br />
									To download controlnet models, go to the
									"stable-diffusion-webui/extensions/sd-webui-controlnet/models"
									and run:
									<CodeBlock highlight className="Code">
										<pre style={{ textAlign: "left" }}>
											<code>
												{`git clone https://huggingface.co/lllyasviel/ControlNet-v1-1
mv ControlNet-v1-1/*.pth .
sudo rm -r ControlNet-v1-1`}
											</code>
										</pre>
									</CodeBlock>
									which will download all the necessary models
									needed for ControlNet.
								</li>
								<li>
									<b>sd-webui-photopea-embed</b> - inbuilt
									pgotoshop-like tool
								</li>
								<li>
									<b>sd-webui-segment-anything</b> - tool that
									segments an image ainto pieces, so yuoui can
									replace individual image piecees
								</li>
								<li>
									<b>sd_dreambooth_extension</b> - Allows you
									to retrain the model with your own images
								</li>
							</ul>
						</li>
					</ol>
				</p>

				<p>
					If you can't fint one the given tools, google them. Then you
					will find a URL to enter in a step 4. Or you will find
					github repository that you will need to clone into
					&#60;stable-diffusion-webui project path&#62;/extensions
					through the SSH.
				</p>
				<h1>Step5: Launch GUIs and create</h1>

				<p>
					As a first step, go to{" "}
					<a href="https://civitai.com/">https://civitai.com/</a>.
					This is a website that hosts models from independant
					artists. You can filter the models to stable diffusion
					version 1.5 and by model type that you want to get. To use
					those models you will need to download them into the correct
					directories. You will have multiple options, but for the
					begginers, I would recommend to start with the following
					models:
				</p>
				<ul>
					<li>
						{" "}
						Checkpoints(base models) - the main models which have
						the biggest size and have the biggest effect on the
						images. For example realistic photo model, without any
						other models, will only produce photos. The more models
						go to the
						"~/stable-diffusion-webui/models/Stable-diffusion"
						directory and will have ".cpt" or ".safetensor"
						extensions.{" "}
					</li>
					<li>
						{" "}
						Loras - are smaller size models which are having
						influence on the base models. Mostly it is used to train
						charracters. For example, if you use a realistic photo
						model and Mario charracter Lora, you will get a
						realistic photo of Mario. Loras are located in the
						"~/stable-diffusion-webui/models/Lora" directory and
						have ".safetensors" extension.
					</li>
					<li>
						{" "}
						Textual inversions - are models that are used to invert
						the text into the image. They work similarly to the
						Loras, but have less significant effect on the image.
						You can use combination of them to fine tune your image.
					</li>
				</ul>

				<p>Launch AUTOMATIC1111 and you will see the following view:</p>
				{/* TODO: add image */}
				<p>
					{" "}
					To create an Image, you will need to create the prompt and
					negative prompt to desdcribe what you want and dont want to
					see in an image. <br />
					for this exampole, we will create a prompt of an old man,
					smoking a cigarette. Then take a pose from another photo and
					apply it to ours. <br />
				</p>
				<h4> Download models </h4>
				<p>
					The base model offered by stable diffusion is a not great.
					It lacks consistency and variet, so we will download a
					better one from civitai.com. <br />
					<br />
					For this example, I will use this{" "}
					<a href="https://civitai.com/models/46294/diffusion-brush-everything-sfw-nsfw-all-purpose-checkpoint-nuclear-diffusion-anime-hybrid">
						model
					</a>{" "}
					ands this{" "}
					<a href="https://civitai.com/models/4935/smoking">Lora.</a>
					from the fo,however, feel free toi experioment with your own
					models. <br />
					To download the models, click on the model you like, right
					click on Download button, copy link and copy the number id
					of the model, by the end of the link. <br />
					Then open your SSH terminal and go to directory to download
					the model: <br />
				</p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>{`# Go to the base model directory
cd ~/stable-diffusion-webui/models/Stable-diffusion

# And download the model using
# wget https://civitai.com/api/download/models/{modelVersionId} --content-disposition
# Where {modelVersionId} is the number id of the model you want to download
wget https://civitai.com/api/download/models/50908 --content-disposition
`}</code>
					</pre>
				</CodeBlock>
				<p> Do the same for the Lora model: </p>
				<CodeBlock highlight className="Code">
					<pre style={{ textAlign: "left" }}>
						<code>{`# Go to the Lora directory
cd ~/stable-diffusion-webui/models/Lora

# Download our Lora
wget https://civitai.com/api/download/models/5687 --content-disposition`}</code>
					</pre>
				</CodeBlock>
				<h4>Create a prompt</h4>
				<p>
					Now that you have downloaded models, start your
					AUTOMATIC1111 GUI, or if it is already running, go to
					Settings-&#62;Reload UI. <br />
					Then select a Stable Diffusion checkpoint(base model) to be
					"diffusionBrushEverythingSFWNSFWAll_v10.safetensors" on the
					top left corner. <br />
					Then go to txt2img tab and enter a prompt which will include
					our Lora "&#8249;lora:smoking_ok:1&#x203A;", where 1 is a
					degree to which you want your image to be affected by Lora.{" "}
					on civitai and copy the prompt{" "}
					<CodeBlock highlight className="Prompt">
						<pre style={{ textAlign: "left" }}>
							<code>{`a portrait of an old man, smoking cigarette (smoking:1.2),
beautiful painting with highly detailed face by greg rutkowski and magali villanueve,  <lora:smoking_ok:1>`}</code>
						</pre>
					</CodeBlock>
					And a negative prompt:
					<CodeBlock highlight className="Prompt">
						<pre style={{ textAlign: "left" }}>
							<code>{`young man, blurry, ugly`}</code>
						</pre>
					</CodeBlock>
					<b>Tip:</b> If you want to learn how to write prompts and
					learn best prompts for speciffic models, go exampole images
					on civitai.com and copy the prompt.
					<br />
					Then, down in the settings, select the "Batch count" to be
					4, to have bigger variation of images. <br />
					Then press "Generate" and wait for the images to be
					generated. <br />
					<b>Congratulations!</b> You have created your first 4
					images.
					<img
						src={Smoking}
						alt="4 images, generated by me"
						className="article-img"
					/>
				</p>
				<h4> ControlNet pose</h4>
				<p>
					Now we will add a pose to our image.
					<br />
					To do that, leave all the setting from the previous step the
					same. Then go to the ControlNet tab and enable it. <br />
					Then save this image.
				</p>
				<img
					src={ControlSmoke}
					alt="To be used to copy pose by ControlNet"
					className="article-img"
					style={{ width: "50%" }}
				/>
				<p>
					Then go to Single image tab and select this image there.{" "}
					<br />
					Lastly, select "Depth" as "Control Type" and press generate.{" "}
					<br />
					<img
						src={Result}
						alt="Result of all the techniques"
						className="article-img"
					/>
					<b>PS.</b> You preview the the pose, by clicking on a little
					bomb icon betweeen the preprocessoer and the Model.
					<img
						src={Preview}
						alt="Result of all the techniques"
						className="article-img"
						style={{ width: "50%" }}
					/>
				</p>
				<h1>Usefull links</h1>
				<ul>
					<li>
						<a href="https://www.youtube.com/watch?v=j-So4VYTL98">
							Video
						</a>{" "}
						explaining on how to train your own Lora using Kohya ss
					</li>
					<li>
						<a href="https://www.birme.net/?rename=xxxxx"> Tool</a>{" "}
						that allows you to prepare images for training Lora.
					</li>
					<li>
						<a href="https://app.posemy.art/"> Tool</a>, rhat allows
						you to create poses for ControlNet.
					</li>
					<li>
						<a href="https://www.youtube.com/watch?v=UgVOQTjahxc">
							{" "}
							Video
						</a>
						, on how to fix the hands on the images, since it is the
						weakest part of the stable diffusion.
					</li>
					<li>
						<a href="https://www.youtube.com/watch?v=z6Xwh9G24uw">
							{" "}
							Video
						</a>{" "}
						on more complex compositions for the images.
					</li>
					<li>
						<a href="https://www.youtube.com/watch?v=SpuYEB_nZW0">
							{" "}
							Video
						</a> on how to use Photopea(photoshoplike tool listed in extension list)
					</li>
				</ul>
			</React.Fragment>
		),
	};
}

const myArticles = [article_2, article_1];

export default myArticles;
