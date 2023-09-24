document.addEventListener('DOMContentLoaded', function () {
    frappe.after_ajax(function () {
        // Use Promise.all to fetch all values concurrently
        Promise.all([
            frappe.db.get_single_value('Theme color settings', 'dark'),
            frappe.db.get_single_value('Theme color settings', 'medium'),
            frappe.db.get_single_value('Theme color settings', 'primary'),
            frappe.db.get_single_value('Theme color settings', 'primary_gradient')
        ])
        .then(([dark, medium, primary, primary_gradient]) => {
            // Set the CSS variables with the fetched values
            document.documentElement.style.setProperty('--darcos-dark', dark);
            document.documentElement.style.setProperty('--darcos-medium', medium);
            document.documentElement.style.setProperty('--darcos-primary', primary);
            document.documentElement.style.setProperty('--darcos-primary-gradient', primary_gradient);

            // Now that the values are set, you can safely continue with other code.
            // For example, you can trigger the 'load' event manually if needed.
            window.dispatchEvent(new Event('load'));
        })
        .catch(error => {
            console.error('Error loading theme color settings:', error);
        });
    });
});
