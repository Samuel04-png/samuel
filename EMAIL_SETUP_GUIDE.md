# 📧 Email Setup Guide - Contact Form

Your contact form is ready to send emails to you! Just follow these **3 simple steps**:

## ✅ Option 1: Web3Forms (Recommended - FREE & Easy)

### Step 1: Get Your Access Key (2 minutes)

1. **Go to**: [https://web3forms.com](https://web3forms.com)
2. **Click**: "Create Your Access Key"
3. **Enter YOUR email** (where you want to receive messages)
4. **Click**: "Create Access Key"
5. **Copy** the access key (looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

### Step 2: Update Your Website

1. **Open**: `index.html`
2. **Find** (around line 305):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. **Replace** `YOUR_ACCESS_KEY_HERE` with your actual access key:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6">
   ```
4. **Save** the file

### Step 3: Test It!

1. Open `index.html` in your browser
2. Scroll to the contact section
3. Fill out the form and click "Send Message"
4. Check your email inbox (and spam folder just in case)
5. You should receive the message! ✉️

### ✨ Web3Forms Features (Free Plan):

- ✅ **250 submissions per month** (free forever)
- ✅ Unlimited forms
- ✅ Email notifications to your inbox
- ✅ Spam protection included
- ✅ No account needed
- ✅ Auto-responder to visitors
- ✅ File uploads supported
- ✅ Works immediately

---

## 🔧 Option 2: Formspree (Alternative)

If you prefer Formspree instead:

### Step 1: Create Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form
4. Copy your form ID (looks like: `xpwz1234`)

### Step 2: Update HTML

In `index.html`, change line 303 from:
```html
<form id="contact-form" class="contact-form" action="https://api.web3forms.com/submit" method="POST">
```

To:
```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/xpwz1234" method="POST">
```

And **remove or comment out** line 305:
```html
<!-- <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"> -->
```

### Formspree Features (Free Plan):
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ Form dashboard

---

## 📧 What Emails Look Like

When someone submits your form, you'll receive an email with:

**Subject**: New submission from Contact Form

**Content**:
```
Name: John Doe
Email: john@example.com
Message: Hi Samuel! I'd love to work with you on my project...
```

---

## 🎨 Customization Options

### Change Email Subject

In `index.html`, add this hidden field:
```html
<input type="hidden" name="subject" value="New Client Inquiry - Portfolio">
```

### Add CC/BCC Emails

Add multiple recipients:
```html
<input type="hidden" name="cc" value="backup@example.com">
<input type="hidden" name="bcc" value="sales@example.com">
```

### Custom Thank You Page

Update line 308:
```html
<input type="hidden" name="redirect" value="https://your-website.com/thank-you">
```

---

## 🛠️ Troubleshooting

### Not receiving emails?

1. ✅ **Check spam/junk folder**
2. ✅ Verify access key is correctly pasted (no extra spaces)
3. ✅ Make sure you used YOUR email when creating the access key
4. ✅ Test form submission again
5. ✅ Check browser console (F12) for errors

### Form shows error message?

1. ✅ Check internet connection
2. ✅ Verify access key is valid
3. ✅ Try refreshing the page
4. ✅ Check browser console for details

### Need more submissions?

**Web3Forms Pro**: $8/month for unlimited submissions
**Formspree Paid**: Starts at $10/month

---

## 📱 Testing Checklist

Before launching:

- [ ] Access key added to `index.html`
- [ ] Test submission sent
- [ ] Email received in inbox
- [ ] Success message appears on website
- [ ] Form clears after submission
- [ ] Mobile responsive (test on phone)

---

## 🚀 You're Ready to Launch!

Your contact form is now **fully functional** and will send emails directly to your inbox!

### Quick Setup Summary:
1. Get access key from web3forms.com
2. Paste it in index.html (line 305)
3. Test it
4. Launch! 🎉

**Need help?** 
- Web3Forms Support: [https://web3forms.com/docs](https://web3forms.com/docs)
- Formspree Support: [https://help.formspree.io](https://help.formspree.io)

---

**Your portfolio is now complete and ready to receive client inquiries!** ✨

