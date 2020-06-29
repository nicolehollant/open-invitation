<template>
  <div class="px-2 py-4 h-full m-auto max-w-5xl">
    <div class="h-full flex flex-col space-y-6">
      <Navbar title="Get Involved!" />
      
      <Card class="flex flex-col space-y-8">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-blue-600">
            Want to get involved with Open Invitation 2020? 
          </h3>
          <div class="font-medium">
            <p>
              If you have some work you want to share, send it to us! Submissions will be accepted on a rolling basis through the Summer of 2020.
            </p>
            <p>
              Send your submission under the subject heading “OI Arts Submission” to 
              <a href="mailto:contactopeninvitation@gmail.com?subject=OI Arts Submission" class="text-indigo-700 underline">
                contactopeninvitation@gmail.com!
              </a>
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-blue-600">
            Submission Material:
          </h3>
          <ol class="list-decimal list-inside font-medium leading-8">
            <li>The completed piece itself in whatever form it'll be in.</li>
            <li>The title of your work.</li>
            <li>A short synopsis of the piece or blurb about it.</li>
            <li>A short bio of yourself and any other artists involved if need be (including everyone's names!).</li>
            <li>A screengrab from the piece/a photo that you think well represents the work. This will serve as the homepage photo for your piece. </li>
            <li>Any other information you would like to be included with your work when it's put online.</li>
            <li>A photo of yourself or representing yourself.</li>
          </ol>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-blue-600">
            Follow us!
          </h3>
          <div class="font-medium">
            <p>
              Looking for more information and weekly arts prompts to get the gears turning? 
              <a href="https://www.instagram.com/openinvitation2020/" target="_blank" rel="noopener noreferrer" class="text-indigo-700 underline">
                Find us on Instagram, @openinvitation2020 !
              </a>
            </p> 
          </div>
        </div>
      </Card>      
      <AppFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetInvolved',
}
</script>
