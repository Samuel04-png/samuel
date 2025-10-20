# FormSpree Setup Guide

This guide will help you set up the contact form for Samuel's portfolio using FormSpree.

## Why FormSpree?

FormSpree is a free service that handles form submissions without needing a backend server. Perfect for static websites!

## Step-by-Step Setup

### 1. Create FormSpree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with your email or GitHub account
4. Verify your email address

### 2. Create a New Form

1. Once logged in, click **"+ New Form"**
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Click **"Create Form"**

### 3. Get Your Form Endpoint

After creating the form, you'll see your form endpoint URL. It looks like:
```
https://formspree.io/f/xpwzeyzr
```

The part after `/f/` is your **Form ID** (e.g., `xpwzeyzr`)

### 4. Update index.html

Open `index.html` and find this line (around line 262):

```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Form ID:

```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/xpwzeyzr" method="POST">
```

### 5. Configure Form Settings (Optional)

In your FormSpree dashboard, you can customize:

- **Email notifications**: Where form submissions are sent
- **Auto-response**: Automatic reply to users who submit
- **Spam filtering**: Enable reCAPTCHA or Akismet
- **Redirect**: Where to send users after submission (leave blank for current setup)
- **File uploads**: Enable if you want to accept attachments

### 6. Test Your Form

1. Save your `index.html` file
2. Open it in a browser
3. Scroll to the contact section
4. Fill out and submit the form
5. Check your email for the submission
6. Check the FormSpree dashboard for the submission

### 7. First Submission Confirmation

⚠️ **Important**: The first time someone submits your form, FormSpree will send a confirmation email. You need to click the confirmation link to activate the form.

## FormSpree Free Plan Limits

- **50 submissions per month** (free plan)
- Unlimited forms
- Email notifications
- Spam filtering
- AJAX support (which this portfolio uses)

If you need more submissions, upgrade to a paid plan.

## Alternative: EmailJS

If you prefer EmailJS instead of FormSpree:

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key

### 2. Update HTML

Add EmailJS script before closing `</body>` tag in `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

### 3. Update JavaScript

In `script.js`, replace the form submission code (around line 290) with:

```javascript
// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    submitBtn.classList.add('loading');
    formStatus.style.display = 'none';
    
    try {
        await emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            contactForm
        );
        
        submitBtn.classList.remove('loading');
        formStatus.className = 'form-status success';
        formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        formStatus.style.display = 'block';
        contactForm.reset();
        
    } catch (error) {
        submitBtn.classList.remove('loading');
        formStatus.className = 'form-status error';
        formStatus.textContent = '✗ Oops! Something went wrong. Please try again.';
        formStatus.style.display = 'block';
    }
});
```

## Troubleshooting

### Form not submitting?

1. Check browser console for errors (F12 → Console)
2. Verify Form ID is correct in `index.html`
3. Make sure you confirmed your email with FormSpree
4. Check if form fields have proper `name` attributes

### Not receiving emails?

1. Check spam/junk folder
2. Verify email address in FormSpree settings
3. Check FormSpree dashboard for submissions
4. Ensure FormSpree account is active

### Getting CORS errors?

This shouldn't happen with FormSpree, but if it does:
- Make sure you're using the correct form endpoint
- Check FormSpree dashboard for allowed domains
- Try using the AJAX endpoint instead

## Testing Checklist

- [ ] Form ID updated in `index.html`
- [ ] FormSpree account email confirmed
- [ ] Test submission sent
- [ ] Email notification received
- [ ] Success message displays correctly
- [ ] Form fields clear after submission
- [ ] Error handling works (test by disconnecting internet)

## Need Help?

- FormSpree Docs: [https://help.formspree.io/](https://help.formspree.io/)
- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

**Your form is now ready to receive messages!** 🚀

