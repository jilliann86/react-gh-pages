import React from "react";

function article_1() {
	return {
		date: "08 November 2023",
		title: "Crafting Your Personal Brand: The Intersection of Effort, Luck, and “Talent”",
		description:
			"In a competitive job market, personal branding is more than just logos and taglines—it's about defining who you are and presenting yourself to the world; this article delves into the interplay between personal branding, effort, luck, and the often misunderstood concept of 'talent.'",
		keywords: [
			"Jillian",
			"Nylund",
			"Jillian N",
			"Please search for me",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					<p>In a job market defined by rapid changes and increasing competition, the concept of personal branding has gained significance in recent years. It is not merely about creating a logo or a catchy tagline; it is about defining who you are, what you stand for, and how you present yourself to the world. It all starts from the work you put in, the opportunities you get, and your abilities. In this article, I will discuss the interplay between personal branding, effort, luck, and “talent.”</p>
					<h3>Effort</h3>
					<p>I was never the student that would say “Oh there’s a test today?” and then proceed to get an easy 100%. Yes, I got good grades, but I worked for them. I was the student up studying late every night to prepare for that test. I go to office hours, ask questions, and work together with others to understand the material. In my experience, hard work, perseverance, and a commitment to continuous improvement are essential to success. Effort is the backbone of personal development and professional growth. </p>
					<p>When examining the relationship between luck and effort, I think Thomas Jefferson put it best. He said, “I'm a great believer in luck, and I find the harder I work the more I have of it.” This ties directly into the idea that hard work, perseverance, and effort expand your luck surface area, creating opportunities for you. Effort is not only a prerequisite for luck, it is a magnet for it.</p>
					<h3>Luck</h3>
					<p>I got an internship for next summer fairly early this year, which could be attributed to the luck of being in the right room at the right time talking to the right person. I went to the very first corporate coffee chat of the semester that one of my classes held. I went to see a company representative that didn’t even show up and ended up speaking to another. We had a great conversation with a group of students and at the end, I told him I was really interested in applying. He did the thing that all students hope for: gave me his business card and told him to email him when I applied.</p>
					<p>A long series of emails and interviews later, I accepted an offer to intern at his company next summer. Some may call it luck; again, right place, right time, right person. However, I see it as my proactiveness that got me to go to that first coffee chat. My interest in focusing on my career got me into this class in the first place. My drive to learn how best to present myself in the professional world got me here. My effort got me here.</p>				
					<p>Yes, I was lucky to meet that employee on that morning. But, I had a large luck surface area to set me up for it.</p>
					<h3>“Talent”</h3>
					<p>You may be wondering why I’ve been putting talent in quotations this entire time. Following the theme of this article, I believe, not that natural talent is not real, but that it is less important than hard work and effort. Practice is what makes ability, ask any musician. While some individuals may possess innate talents that give them a head start in certain areas, the majority of people must rely on hard work to achieve excellence. The myth of overnight success often obscures the years of practice, failure, and refinement that precede notable achievements.</p>
					<p>I have often found myself angry at those who seem not to try at all and yet achieve great things. I can see all the effort I put in, the hours upon hours of late nights. Now, I wonder if they are actually trying just as hard behind the scenes. We all want to seem effortless. So, maybe I'll take it back. Maybe “talent” doesn’t exist at all.</p>
					<h3>Personal Brand</h3>
					<p>So, now you are probably wondering how this all ties back into your own personal brand. Your personal brand is your unique value proposition to the world. It encompasses your skills, values, personality, and the way you engage with others. It is deliberate; you have control over it. It is authentic. The key is however, that you have the power to shape it. You can use effort and hard work to craft a brand that increases your likelihood of getting recognized (say, your luck).</p>
					<p>My only piece of advice is this. As you navigate the complexities of personal branding, remember that the most enduring success is built on a bedrock of hard work, perseverance, and the unwavering commitment to making your own luck.</p>
					<p>Thank you for reading :)</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
