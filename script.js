document.getElementById('btnPreview').addEventListener('click', function() {
    document.getElementById('previewModal').style.display = 'block';
  });
  
  document.getElementById('btnClose').addEventListener('click', function() {
    document.getElementById('previewModal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    var modal = document.getElementById('previewModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  