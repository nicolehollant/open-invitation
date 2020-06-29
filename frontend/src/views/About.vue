<template>
  <div class="px-2 py-4 h-full m-auto max-w-5xl">
    <div class="h-full flex flex-col space-y-6">
      <Navbar title="About Us" />

      <Card :padded="false" class="flex flex-col space-y-8 divide-gray-300 my-2 px-4 pt-4 pb-10 text-lg">
        <img class="w-64 m-auto" src="@/assets/logo.png" alt="open invitation logo">
        <div class="space-y-6 md:mx-12">
          <p class="leading-relaxed">In early January of 2020, we created the Open Invitation Arts Festival as a space for Bard students to play. In our first call for submissions issued at the beginning of this year, we wrote: “Whether it be a one act you’ve fallen in love with, a short play written for class or for pleasure, or a piece born out of some fever dream and abandoned out of lack of time, space, or other constraints of student life, Open Invitation is meant to give back some of that lost time by providing artists with a space to play; to revisit and breathe new life into those ideas that might have drifted off.” As the year progressed, our original emphasis on reclaiming our time and sense of pleasure as artists took on new and strange meaning. It became clear that we would have to change the form the festival took. However, we wanted to ensure that our ethos would remain the same. Open Invitation Arts Festival is and will remain a space for the artist’s process to be emphasized -- to celebrate work of all kinds and to maintain the importance of lifting up and encouraging artists to reclaim their sense of play.</p>
          <p class="leading-relaxed">The works for our June program are wide-ranging and diverse in both form and content, extending from works of poetry to written scripts, from radio plays to recorded interviews, from still-life photography to recorded performance art. The 2020 Open Invitation Arts Festival seeks to reevaluate what a “festival” might look like in our newfound reliance on digital media -- to keep us connected and excited about art-making even as we continue to navigate this strange and potentially stifling moment. We hope this festival can provide artists with a reason to keep creating at a time when it may feel meaningless.</p>
        </div>
        <h3 class="serif text-2xl md:text-3xl font-regular text-yellow-900 md:mx-12 pt-2 md:pt-8">
          The Program:
        </h3>
        <div class="md:mx-12">
          <p class="leading-relaxed">Over the course of the Summer of 2020, three to five new works will premiere every two weeks on Open Invitation. These premieres are curated for the ease and enjoyment of the user, or audience member, while still maintaining the specialness and singularity of each work, and giving credence to the artists who created them.</p>
        </div>
        <h3 class="serif text-2xl md:text-3xl font-regular text-yellow-900 md:mx-12 pt-2 md:pt-8">
          The Founders:
        </h3>
        <div class="pt-2 space-y-12 md:space-y-16 md:mx-12">
          <div class="flex flex-col space-y-6 md:space-x-4 md:space-y-0 md:flex-row justify-between items-center">
            <img class="object-fill shadow-md rounded-lg w-64" style="max-height: 20rem;" src="https://cole-hollant-objects.nyc3.cdn.digitaloceanspaces.com/open-invitation/anna.jpg" alt="portrait of anna">
            <div class="text-base space-y-4 max-w-lg">
              <p><span class="serif text-blue-600 font-medium text-lg">ANNA FALVEY</span> is a 2020 graduate of Bard College’s Classics and Written Arts departments. She is an actor, poet, and a teaching artist for Artists Striving to End Poverty (<a class="text-indigo-700 underline" href="https://astep.org/" target="_blank" rel="noopener noreferrer">astep.org</a>). When not making theater or supporting others who do so, she can be found badly translating Greek poetry. Enjoy this summer’s Open Invitation program and keep an eye out for more!</p>
              <p class="text-gray-600">
                Donate to <span class="italic">The Audre Lorde Project</span> and support POC in New York City’s LGBTQIA+ community!
                <a class="block text-indigo-700 underline" href="https://alp.org/" target="_blank" rel="noopener noreferrer">
                https://alp.org/
                </a>
              </p>
            </div>
          </div>
          <div class="flex flex-col space-y-6 md:space-x-4 md:space-y-0 md:flex-row justify-between items-center">
            <img class="object-fill shadow-md rounded-lg w-64" style="max-height: 20rem;" src="https://cole-hollant-objects.nyc3.cdn.digitaloceanspaces.com/open-invitation/phil.jpg" alt="portrait of phil">
            <div class="text-base space-y-4 max-w-lg">
              <p><span class="serif text-blue-600 font-medium text-lg">PHIL CARROLL</span> is an actor and playwright and a member of the Bard College class of 2020. When not producing socially distant arts festivals, he can be found watching indie movies, reading, and applying to jobs. He hopes you enjoy the festival, and remember to check back for more projects!</p>
              <p class="text-gray-600">
                Support a mutual-aid project to help Black trans women with the financial resources needed to be able to self-determine safer alternatives to travel!
                <a class="block text-indigo-700 underline" href="https://devinmichaellowe.com/black-trans-travel-fund" target="_blank" rel="noopener noreferrer">
                https://devinmichaellowe.com/black-trans-travel-fund
                </a>
              </p>
            </div>
          </div>
        </div>
        <h3 class="serif text-2xl md:text-3xl font-regular text-yellow-900 md:mx-12 pt-2 md:pt-8">
          Our Mission
        </h3>
        <div class="md:mx-12">
          <p class="leading-relaxed">Open Invitation 2020 seeks to provide artists with a space to explore -- to celebrate work of all kinds and to encourage artists to reclaim their sense of play. The festival is an amalgamation of different types of work, from bodies of poetry to readings; radio plays to recorded sound pieces; performance art to claymation film. Though it might not be what we had originally envisioned, Open Invitation seeks to reevaluate what a “festival” might look like in our newfound reliance on digital media -- to keep us connected and excited about art-making as we continue to navigate this strange and potentially stifling moment.</p>
        </div>
      </Card>

      <AppFooter />
    </div>
  </div>
</template>


<script>
export default {
  name: 'About',
}
</script>
