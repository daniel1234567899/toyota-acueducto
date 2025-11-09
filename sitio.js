// Obtener el div donde se mostrará el formulario
const contenedor = document.getElementById('formulario');

// Función que genera el formulario
function generarFormulario() {
  // Aquí va el HTML de tu formulario
  const formHTML = `
    <form id="formulario-contacto">
      <div class="form-group">
        <div class="h5 vw-title-form"></div>
      </div>
      <div class="form-group">
        <input class="form-control height" id="first_name" name="first_name" type="text" placeholder="Nombre" required />
      </div>
      <div class="form-group">
        <input class="form-control height" id="last_name" name="last_name" type="text" placeholder="Apellido Paterno" required />
      </div>
      <div class="form-group">
        <input class="form-control height" id="email" name="email" type="email" placeholder="Mail" required />
      </div>
      <div class="form-group">
        <input id="phone" class="form-control height" type="tel" name="phone" placeholder="Teléfono" required maxlength="10" pattern="[0-9]{10}" />
      </div>
      <div class="form-group">
        <select class="custom-select height" id="00N1Y00000IvPGN" name="00N1Y00000IvPGN" required>
          <option value="">Forma de Contacto Preferida</option>
          <option value="correo">correo</option>
          <option value="telefono">Teléfono</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>
      <div class="form-group">
        <select class="custom-select height" id="00N1Y00000IqZAE" name="00N1Y00000IqZAE" required>
          <option value="">Modelo</option>
          <option value="Avanza">Avanza</option>
          <option value="Camry">Camry</option>
          <option value="Camry Hybrid">Camry Hybrid</option>
          <option value="Corolla">Corolla</option>
          <option value="Corolla Cross">Corolla Cross</option>
          <option value="Corolla Hybrid">Corolla Hybrid</option>
          <option value="GR Yaris">GR Yaris</option>
          <option value="Hiace">Hiace</option>
          <option value="Highlander">Highlander</option>
          <option value="Hilux">Hilux</option>
          <option value="Hilux Diesel">Hilux Diesel</option>
          <option value="Prius">Prius</option>
          <option value="Prius C">Prius C</option>
          <option value="Raize">Raize</option>
          <option value="RAV4">RAV4</option>
          <option value="RAV4 Hybrid">RAV4 Hybrid</option>
          <option value="Sequoia">Sequoia</option>
          <option value="Sienna">Sienna</option>
          <option value="Supra">Supra</option>
          <option value="Tacoma">Tacoma</option>
          <option value="Tundra">Tundra</option>
          <option value="Yaris Hatcback">Yaris Hatcback</option>
          <option value="Yaris Sedán">Yaris Sedán</option>
        </select>
      </div>
      <div class="form-group">
        <textarea class="form-control height-text" id="mensaje" name="mensaje" cols="30" rows="5" placeholder="Mensaje" required></textarea>
      </div>
      <div class="form-group">
        <label class="label label-privacy-policy">
          <input type="checkbox" name="0" value="0" required />
          <span tabindex="" role="button" class="button-privacy-policy" data-bs-toggle="modal" data-bs-target="#openModal"> Acepto Política de Privacidad </span>
        </label>
      </div>
      <div style="display:none;">
        <label for="validar">Validar:</label>
        <input type="text" id="validar" name="validar">
      </div>
      <div class="g-recaptcha" data-sitekey="6LeXmVUpAAAAAKXKNHzrMxuC2uswf0gRlDlxJ_Fu"></div>
      <input type="submit" class="btn common__button common__width_full c" value="Enviar" />
      <div id="respuesta" style="text-align: center;color: #fff;"></div>
    </form>
  `;

  contenedor.innerHTML = formHTML;
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', generarFormulario);
