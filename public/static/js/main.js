<script
dangerouslySetInnerHTML={{
  __html: `
    document.addEventListener('DOMContentLoaded', function() {
      feather.replace();
      document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
      });
    });
  `,
}}
/>