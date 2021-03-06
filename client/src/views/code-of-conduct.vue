<template>
    <section class="code-of-conduct">
		<h2>Develop Denver Code Of Conduct</h2>
		<div>
			<p>All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We are expecting cooperation from all participants to help ensuring a safe environment for everybody.</p>

			<p><strong>tl;dr:</strong> Be excellent with each other</p>

			<h3>Need Help or Need to Report a Code of Conduct Violation?</h3>
			<p>
				You can talk with any conference organizer in person, email us at
				<a href="mailto:hello@developdenverorg">hello@developdenver.org</a>,
				or slack Kim Schlesinger or Kyle Coberly on the Denver Devs slack workspace.
			</p>
			<p>
				If you feel uncomfortable talking with a conference organizer, please reach out to one of the following people:
			</p>
			<ul class="bulleted">
				<li>
					Scott Miller
					<ul>
						<li>In person</li>
						<li>Via text or phone: 303-513-2124</li>
					</ul>
				</li>
				<li>
					Alison Lawrence Daley
					<ul>
						<li>In person</li>
						<li>On Denver Devs: <code>@Al.Is.On</code></li>
					</ul>
				</li>
				<li>
					Nina Baliga
					<ul>
						<li>In person on Thursday</li>
						<li>Via email Thursday and Friday: <a href="mailto:nina@hirediversity.us">nina@hirediversity.us</a></li>
					</ul>
				</li>
			</ul>

			<h3>The Quick Version:</h3>
			<p>Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, or religion (or lack thereof). We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.</p>

			<h3>The Less Quick Version:</h3>
			<p>Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>
			<p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
			<p>Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.</p>
			<p>If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.</p>
			<p>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they'll be wearing branded t-shirts.</p>
			<p>Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</p>
			<p>We expect participants to follow these rules at conference and workshop venues and conference-related social events.</p>
		</div>
    </section>
</template>

<style lang="scss">
    @import "@/styles/_typography.scss";
    @import "@/styles/_sizes.scss";
    @import "@/styles/_general.scss";

	.code-of-conduct {
		@include grid;
		margin: $baseline * 8 0;
		> div {
			grid-column: 5 / span 5;
			p {
				margin-bottom: $baseline;
			}

		}
		ul.bulleted {
		 	li {
				list-style: circle;
				margin-left: 15px;
				margin-bottom: 10px;
				li {
					list-style: disc;
				}
			}
			margin-bottom: 20px;
		}
	}
</style>
